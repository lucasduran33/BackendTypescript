import { Session } from 'express-session';


interface CustomSession extends Session {
    counter?: number;
    user?: any; //Hasta saber que valor 
  }


  export {CustomSession}