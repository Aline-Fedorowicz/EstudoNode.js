import { Router } from 'express' ;
import { SurveysController } from './controllers/SurveyController';
import {UserController} from "./controllers/UserController";


const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();


router.post("/surveys", surveysController.create);
router.post("/users", userController.create);

export {router}; 