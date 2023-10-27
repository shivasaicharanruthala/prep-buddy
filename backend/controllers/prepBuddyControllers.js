import * as prepBuddyService from '../services/prepBuddyServices.js';
import { setError, setResponse } from '../utils/common.js';
import generateToken from '../utils/generateToken.js';
import path from 'path';
// @description registering a user
// @route /SignUp
// public
export const userRegistration = async (req, res) => {
    try {
        // returns the userdata from database using email
        const validUser = await prepBuddyService.getByEmail(req.body);
        if (validUser) {
            throw { code: 409, message: `User with email: ${req.body.email} already exists` };
        }
        const saveUser = await prepBuddyService.post(req.body);
        //Sends an email to user for verification purpose
        prepBuddyService.sendUserVerficationEmail(req.body , res); 
        setResponse(saveUser, res, 201)
    } catch (err) {
        res.status(err.code ? err.code : 500).send({ message: err.message ? err.message : "Something went wrong in SignUp!" })
    }
}



// @description Email verification of a user
// @route Email link
// private
export const validateUser = async (req, res) => {
    let {userId} = req.params;
    try{
        // User email verification
        await prepBuddyService.userVerfication(userId , req, res);
    }
    catch(err)
    {
        //console.log(err);
    }
}
