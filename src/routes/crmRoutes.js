import { get } from 'mongoose';
import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact
} from '../controllers/crmController';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    // Post endpoint
    .post(addNewContact);

  app
    .route('/contact/:contactID')
    // get a specific contact
    .get(getContactWithID)
    // update a contact
    .put(updateContact)
    // delete a contact
    .delete(deleteContact);
};

export default routes;
