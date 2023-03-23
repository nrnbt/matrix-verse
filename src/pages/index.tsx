import Head from 'next/head'
import { FunctionComponent } from 'react'
import Navigations from '@/components/page-components/Navigations'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>GPT 3.5 turbo</title>
      </Head>
      <div className='flex w-full h-screen pb-20 justify-center'>
        <div className='flex flex-col justify-center items-center text-center h-full w-full lg:w-2/5 px-4 lg:px-0'>
          <div className='mb-8 px-4 py-2 neon-text rounded-xl text-4xl'>Matrix-Verse</div>
          <div className='text-sm lg:text-xl font-bold'>GPT-3.5 загвар нь ярианы хэл эсвэл кодыг ойлгож, үүсгэж чадна. GPT-3.5 төрөл нь GPT-3 загвараас харьцангуй чадварлаг бөгөөд зардал багатай загвар юм.Gpt-3.5-турбо загвар нь чатлах зориулалттай хэдий ч уламжлалт гүйцэтгэлийн ажилд ч сайн ажилладаг.</div>
          <div className='flex flex-col justify-center items-center p-4 gap-4'>
            <div className='pt-4 font-semibold'>Choose one of below</div>
            <Navigations className='flex gap-4' />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
