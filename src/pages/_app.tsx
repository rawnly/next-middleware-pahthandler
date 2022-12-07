import { AppProps } from 'next/app'
import { FC } from 'react'


import '../global.css'
import { SessionProvider } from 'next-auth/react'

// try to remove className and keep the fonts only inside `_document.tsx`
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
);

export default App

