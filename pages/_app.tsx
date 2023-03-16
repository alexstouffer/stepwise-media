import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar, { Navbar2 } from '../components/Navbar2/Navbar2'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider>
      <Navbar2 />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
}

export default MyApp
