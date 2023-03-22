import Navigations from '@/components/page-components/Navigations'
import theme from '@/site-settings/theme/mui-theme'
import { useMediaQuery } from '@mui/material'
import cn from 'classnames'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useRef } from 'react'

const MatrixRain: FunctionComponent = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()
  const mobileLayout = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    let interval: NodeJS.Timeout

    const columns = Math.floor(canvas!.width / 20)
    const drops: number[] = []
    const symbols = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = (): void => {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)
      ctx!.fillStyle = '#0F0'
      ctx!.font = '15px Arial'

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)]
        ctx!.fillText(text, i * 20, drops[i] * 20)
        if (drops[i] * 20 > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    interval = setInterval(draw, 33)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/icons/gpt-icon.png' />
      </Head>
      {!mobileLayout
        ? (
          <div className='flex flex-col items-center min-h-full relative'>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} width={window.innerWidth} height={window.innerHeight} />
            {router.pathname !== '/matrix' && (
              <>
                {router.pathname !== '/' && (
                  <div className='w-full sticky top-0 z-20 mb-4'>
                    <div className='flex items-center bg-dark-transparent px-10 py-2 gap-4 w-full'>
                      <img className='h-10 w-10' src='/icons/gpt-icon.png' alt='gpt-icon' />
                      <Navigations className='flex gap-4 justify-end m-2' />
                    </div>
                  </div>
                )}
                <div className={cn('absolute h-screen pt-20 flex justify-center items-center w-full')}>
                  <div className='flex-1 w-full h-full'>
                    {children}
                  </div>
                </div>
              </>
            )}
          </div>
          )
        : (
          <div className='flex flex-col h-screen w-screen relative'>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} width={window.innerWidth} height={window.innerHeight} />
            {router.pathname !== '/matrix' && (
              <>
                {router.pathname !== '/' && (
                  <div className='w-full sticky z-20 transform duration-200 top-0'>
                    <div className='flex items-center bg-dark-transparent px-10 py-2 gap-4 w-full'>
                      <img className='h-10 w-10' src='/icons/gpt-icon.png' alt='gpt-icon' />
                      <Navigations className='flex gap-4 justify-end m-2' />
                    </div>
                  </div>
                )}
                <div className='absolute h-screen pt-20 mb-18 w-full overflow-x-hidden overflow-y-auto'>
                  <div className='flex flex-col h-full w-full'>
                    {children}
                  </div>
                </div>
              </>
            )}
          </div>
          )}
    </>
  )
}

export default MatrixRain
