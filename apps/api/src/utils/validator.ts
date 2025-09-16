import {z} from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(1,'Name is required'),
  email: z.string().email('Invalid email')
})
export const getUserSchema = z.object({
  name:z.string().min(2,'Name is required')
})
