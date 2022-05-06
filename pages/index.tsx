import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"
const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>FORIA FEED 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <Header />
      <Feed />
      <Modal />
      
      {/* {Feed} */}
      {/* {Footer} */}
    </div>
  )
}

export default Home
