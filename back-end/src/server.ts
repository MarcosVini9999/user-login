import express, { Router } from "express";

const app = express();

const routes = Router();

routes.get("/hello-world", (_request, response) => {
  return response.status(200).json({
    message: "Hello World, I'm talking about port 3333",
  });
});

app.use(routes);

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
