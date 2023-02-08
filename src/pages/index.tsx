import { Inter } from '@next/font/google'
import Advice from 'components/advice'
import Layout from 'components/layout'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Layout children={Advice()} />
    </>
  )
}
