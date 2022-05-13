import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/Nav"
import 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <Nav />
     <HomeProducts />
    </div>
  )
}