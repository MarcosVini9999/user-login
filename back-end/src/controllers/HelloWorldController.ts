import { Response, Request } from "express";

export class HelloWorldController {
  public async show(_request: Request, response: Response) {
    return response.status(200).json({
      message: "Hello World, I'm talking about port 3333",
    });
  }
}
