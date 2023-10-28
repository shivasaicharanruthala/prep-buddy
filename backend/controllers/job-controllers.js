import * as contactsService from '../services/todo-service.js'

const setErrorResponse=(error, response, statusCode) =>{ //this is for success response
    console.log(statusCode)
    response.status(statusCode);
    response.json(error);
}

const setSuccessResponse=(obj, response, statusCode) =>{ //this is for success response
    response.status(statusCode);
    response.json(obj)
}

export const post=async(request, response) => {
    let statusCode;
    try{
    const payload=request.body;
    console.log("the payload", request)
    const contact= await contactsService.save(payload);
    statusCode=201;
    setSuccessResponse(contact,response, statusCode);
    }
    catch(error){
        setErrorResponse(error,response, statusCode? statusCode: 400);
    }
}

export const index= async(request, response) => {
    //let statusCode;
    try{
        const jobTitle=request.query.jobTitle;
        const company=request.query.company;
        const jobLink = request.query.jobLink;
        const jobType = request.query.jobType;
        const query={};
        if(jobTitle){
            query.jobTitle=jobTitle;
          
        }
        if(company){
            query.company=company;
        }
        if(jobLink){
            query.jobLink = jobLink;
        }
        if(jobType){
            query.jobType = jobType;
        }
        const contacts=await contactsService.search(query);
        console.log("Log in details ------", contacts)
        setSuccessResponse(contacts,response, 200);
    }
    catch(error){
        setErrorResponse(error,response, 400);
    }
}



