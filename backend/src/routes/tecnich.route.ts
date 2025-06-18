import { Router } from 'express';
import { getAllDocuments, updateDocumentStatus } from '../controllers/technic.controller';
import { authenticationToken } from '../middleware/auth.middleware';
import { authorizeRole } from '../middleware/authorization.middlewere';

const tecRoute = Router();

tecRoute.get( '/allrequests', authenticationToken, authorizeRole('technical'), getAllDocuments);
tecRoute.patch( '/:id/status', authenticationToken, authorizeRole('technical'), updateDocumentStatus);

export default tecRoute;