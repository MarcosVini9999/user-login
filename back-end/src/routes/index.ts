import { Router } from "express";

import { helloWorldroutes } from "./helloWorldRoutes";

const routes = Router();

routes.use("/hello-world", helloWorldroutes);

export { routes };
