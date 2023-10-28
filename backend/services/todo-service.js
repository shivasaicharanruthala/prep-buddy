import Todo from '../models/job-listing.js'

export const save = (newContact) =>{ //Business logic
    const contact = new Todo();
    contact.jobTitle= newContact.jobTitle;
    contact.company= newContact.company;
    contact.jobLink = newContact.jobLink;
    contact.jobType = newContact.jobType;
    console.log("the contact", contact)
    // contact.dueDate= newContact.todoDate;
    // contact.dueTime= newContact.todoTime;
    return contact.save(); //model which is saving
}

export const search = (query) =>{ //Request params
    const params= {...query};
    return Todo.find(params).exec(); //mo //model which is saving
}
