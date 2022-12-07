import { NextMiddleware } from "next/server"
import { handlePaths } from "./middlewares"
import { withAuth } from 'next-auth/middleware'

export const middleware = handlePaths(new Map([
  [
    '/dashboard',
    withAuth(req => console.log(req), {
      callbacks: {
        authorized: (_) => true
      }
    }) as NextMiddleware
  ]
]))
