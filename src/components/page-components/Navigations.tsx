import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
}

const Navigations: FunctionComponent<Props> = ({ className }) => {
  const router = useRouter()
  return (
    <div className={className}>
      {router.pathname !== '/' && (
        <Button
          variant='contained'
          className='neon-text'
        >
          <Link
            href={{
              pathname: '/'
            }}
          ><a className='font-bold'>home</a>
          </Link>
        </Button>
      )}
      <Button
        variant='contained'
        className={router.pathname === '/chat' ? 'bg-dark-transparent' : 'neon-text'}
      >
        <Link
          href={{
            pathname: '/chat'
          }}
        ><a className='font-bold'>chat</a>
        </Link>
      </Button>
      <Button
        variant='contained'
        className={router.pathname === '/image' ? 'bg-dark-transparent' : 'neon-text'}
      >
        <Link
          href={{
            pathname: '/image'
          }}
        ><a className='font-bold'>image</a>
        </Link>
      </Button>
    </div>
  )
}

export default Navigations
