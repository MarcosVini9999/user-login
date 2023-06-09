import express from "express";
import { AppError } from "./AppError";

export function errorInterceptor(
  error: Error,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      status: "Error",
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
}
