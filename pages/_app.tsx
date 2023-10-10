import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import Modal from "@/components/Modal"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"
import LoginModal from "@/components/modals/LoginModal"
import RegisterModal from "@/components/modals/RegisterModal"
import EditModal from "@/components/modals/EditModal"
import { ThemeProvider } from "next-themes"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute='class'>
        <Toaster />
        <RegisterModal />
        <EditModal />
        <LoginModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}
