import { Router } from "express";
import { HelloWorldController } from "../controllers";

const helloWorldroutes = Router();
const helloWorldController = new HelloWorldController();

helloWorldroutes.get("/", helloWorldController.show);

export { helloWorldroutes };
