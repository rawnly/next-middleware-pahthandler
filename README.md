This is a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

## Middleware matchers example 
This is an example created for the discussion [#43816 on next.js repo](https://github.com/vercel/next.js/discussions/43816)

## Setup 
This example relies on Github authentication, please fill up the `.env` file with your credentials

### Github Credentials 
Go on [https://github.com/settings/apps](https://github.com/settings/apps) to get `CLIENT_ID` and `CLIENT_SECRET`
then add them to your `.env` file as `GITHUB_CLIENT_ID=<client-id>` and `GITHUB_CLIENT_SECRET=<secret>`.

### Secret
To generate a new secret use: `openssl rand -base64 32` and save it to the `.env` file as `NEXTAUTH_SECRET=<secret>`

### Database Creation
To setup your local db run:
```sh
$ npx prisma migrate dev 
$ npx prisma genrate dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to Contribute to Open Source (Next.js)](https://www.youtube.com/watch?v=cuoNzXFLitc) - a video tutorial by Lee Robinson
- [Triaging in the Next.js repository](https://github.com/vercel/next.js/blob/canary/contributing.md#triaging) - how we work on issues
- [StackBlitz](https://stackblitz.com/fork/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on StackBlitz
- [CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on CodeSandbox

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

