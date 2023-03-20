import { NextPage } from 'next'
import Link from 'next/link'

const Custom404Page: NextPage = () => {
  return (
    <div className='flex flex-col font-semibold font-sans justify-center items-center text-white min-h-full align-middle'>
      <div className='flex text-5xl items-center'>
        <p className='p-2'>Oops!</p>
        Page not found
      </div>
      <div className='p-2 text-3xl'>
        <Link
          href={{ pathname: '/' }}
        >
          Return to home page
        </Link>
      </div>
    </div>
  )
}

export default Custom404Page
