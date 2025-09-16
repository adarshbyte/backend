import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import AppError from "../utils/AppError.js";

const prisma = new PrismaClient();

type CreateUserBody = {
  name: string;
  email: string;
};

type GetUserQuery = {
  name: string;
};

export const getUser = async (
  req: Request<{}, {}, {}, GetUserQuery>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.query;
    const users = await prisma.user.findMany({
      where: { name },
    });

    if (!users.length) {
      throw new AppError("User not found", 404);
    }

    res.status(200).json({ users });
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const saveUser = async (
  req: Request<{}, {}, CreateUserBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};
