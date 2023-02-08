import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Advice from 'components/advice'
import Layout from 'components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout children={Advice()}/>
  )
}
