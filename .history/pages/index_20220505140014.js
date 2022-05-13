import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/Nav"
import HomeProducts from "../components/HomeProducts"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     

     <main className='grey-background'>
     <Nav />
     <HomeProducts />
     </main>
    </div>
  )
}