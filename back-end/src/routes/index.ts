import { Router } from "express";

import { helloWorldroutes } from "./helloWorldRoutes";
import { usersRoutes } from "./usersRoutes";

const routes = Router();

routes.use("/hello-world", helloWorldroutes);
routes.use("/users", usersRoutes);

export { routes };
