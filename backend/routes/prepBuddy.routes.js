import express from 'express';




// imports users, mock-interviews, and interview-experiences controllers.
import * as prepBuddyController from './../controllers/prepBuddyControllers.js';

const Router = express.Router();

// Routes for user sign-up, login, user email validation.

Router.route('/signup').post(prepBuddyController.userRegistration);
Router.route('/:userId/verify').get(prepBuddyController.validateUser);

// export router
export default Router;