import { NextMiddleware, NextResponse } from "next/server"


export const handlePaths = (handlers: Map<string, NextMiddleware>): NextMiddleware =>
  (req, ev) => {
    const handler = handlers.get(req.nextUrl.pathname)

    if (!handler) {
      // if no handler pass the request on to the next middleware
      return NextResponse.next()
    }

    return handler(req, ev)
  }

