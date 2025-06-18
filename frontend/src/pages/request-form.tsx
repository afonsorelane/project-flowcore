import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

// 1. Define your Zod Schema
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  videoFile: z
    .any()
    .refine((file) => file instanceof File, {
      message: "A video file is required.",
    })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      // 10MB limit
      message: "Video size must be less than 10MB.",
    })
    .refine((file) => file.type.startsWith("video/"), {
      message: "Only video files are allowed.",
    }),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  comments: z.string().optional(),
});

export const SubmitForm = () => {
  // 2. Initialize react-hook-form with Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      videoFile: null, // Initialize as null
      agreedToTerms: false,
      comments: "",
    },
  });

  // 3. Define your onSubmit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", values);
    // Here you would typically send the data to your backend
    // For file uploads, you'd usually use FormData:
    // const formData = new FormData();
    // formData.append('firstName', values.firstName);
    // formData.append('video', values.videoFile);
    // ... then use fetch or axios to post formData
    alert("Form submitted! Check console for values.");
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-2">Submit a Video</h1>
      <p className="text-gray-600 mb-6">Submit your video for evaluation</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="mt-6 md:mt-0">
                  {" "}
                  {/* Adjust margin for alignment */}
                  <FormLabel className="sr-only">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* E-mail */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="ex: myname@example.com" {...field} />
                </FormControl>
                <FormDescription>example@example.com</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Upload Video */}
          <FormField
            control={form.control}
            name="videoFile"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Upload Video</FormLabel>
                <FormControl>
                  <div
                    className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-400 transition-colors"
                    onDragOver={(e) => e.preventDefault()} // Allow drop
                    onDrop={(e) => {
                      e.preventDefault();
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        onChange(e.dataTransfer.files[0]);
                      }
                    }}
                    onClick={() => {
                      const input =
                        document.getElementById("video-upload-input");
                      if (input) (input as HTMLInputElement).click();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">Upload a File</p>
                    <p className="text-xs text-gray-400">
                      Drag and drop files here
                    </p>
                    <input
                      id="video-upload-input"
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          onChange(e.target.files[0]);
                        }
                      }}
                      {...fieldProps}
                    />
                  </div>
                </FormControl>
                {value && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected file: {value.name}
                  </p>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-sm text-gray-700 space-y-1">
            <p>Make sure your video is no longer than 10 minutes.</p>
            <p>
              Make sure you I own the right to use all music & images on the
              video.
            </p>
            <p>
              Make sure your video does not contain inappropriate language,
              images, or sounds.
            </p>
          </div>

          {/* Do You Agree to the Terms Above? */}
          <FormField
            control={form.control}
            name="agreedToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Do You Agree to the Terms Above?</FormLabel>
                  <FormDescription>
                    <ul className="list-disc ml-4 text-xs">
                      <li>Yes, I do</li>
                      <li>No, I don't</li>
                    </ul>
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Comments */}
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comments</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type here..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit Video</Button>
        </form>
      </Form>
    </div>
  );
};
