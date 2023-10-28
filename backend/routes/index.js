import Router from './prepBuddy.routes.js';

export default (app) => {
    // all user routes
    app.use('/user', Router);
}