import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redisClient from '../redisClient.js';
import { Request } from "express";

const limiter = rateLimit({
  windowMs:1*60*60,
  max:5,
  keyGenerator:(req:Request)=>req.body.id,
  store: new RedisStore({
    sendCommand:(...args)=>redisClient.sendCommand(args)
  }),
  message:'Too many messages',
  standardHeaders:true,
  legacyHeaders:false
})

export default limiter;
