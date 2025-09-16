import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

type Source = "body" | "query" | "params";

const validate = (schema: ZodSchema, source: Source = "body") => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload =
    source === "body"
      ? req.body
      : source === "query"
      ? req.query
      : req.params;

  const result = schema.safeParse(payload);

  if (!result.success) {
    return res.status(400).json({ error: result.error.flatten() });
  }

  if (source === "body") {
    req.body = result.data;
  } else if (source === "query") {
    Object.assign(req.query as Record<string, unknown>, result.data);
  } else {
    Object.assign(req.params as Record<string, string>, result.data);
  }

  next();
};

export default validate;
