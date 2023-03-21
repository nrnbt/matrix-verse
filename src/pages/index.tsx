import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>GPT 3.5 turbo</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='text-4xl mb-8 px-4 py-2 neon-text rounded-xl'>GPT 3.5 Turbo</div>
        <div className='text-xl font-bold'>GPT-3.5 models can understand and generate natural language or code. Our most capable and cost effective model in the GPT-3.5 family is gpt-3.5-turbo which has been optimized for chat but works well for traditional completions tasks as well.</div>
        <div className='flex flex-col justify-center items-center p-4 gap-4'>
          <div className='pt-4 font-semibold'>Choose one of below</div>
          <div className='flex gap-4'>
            <Button
              variant='contained'
            >
              <Link
                href={{
                  pathname: '/chat'
                }}
              ><div className='font-bold'>chat</div>
              </Link>
            </Button>
            <Button
              variant='contained'
            >
              <Link
                href={{
                  pathname: '/image'
                }}
              ><div className='font-bold'>image</div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
