import { Request,Response, NextFunction } from "express";

export function errorHandler(err:any,req:Request,res:Response,next:NextFunction){
  console.log('error')
  const statusCode = err.status || 500;
  const message = err.message || 'Internal server error'
  res.status(statusCode).json({
    success:false,
    message,
    error: process.env.NODE_ENV === "development" ? err.stack : undefined
  })
}
