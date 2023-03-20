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
      <div className='flex flex-col justify-center items-center gap-2 p-4'>
        <Button
          variant='contained'
        >
          <Link
            href={{
              pathname: '/chat'
            }}
          >chat
          </Link>
        </Button>
        <Button
          variant='contained'
        >
          <Link
            href={{
              pathname: '/image'
            }}
          >image
          </Link>
        </Button>
      </div>
    </>
  )
}

export default HomePage
