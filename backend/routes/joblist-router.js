import express from 'express';
import * as contactsController  from '../controllers/job-controller.js';

const router=express.Router();

router.route('/')
 .post(contactsController.post)
 .get(contactsController.index);

 
 //Now create the export

 export default router;