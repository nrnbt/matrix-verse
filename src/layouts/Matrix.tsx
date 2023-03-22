import Navigations from '@/components/page-components/Navigations'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useRef } from 'react'

const MatrixRain: FunctionComponent = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

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
    <div className='flex flex-col items-center min-h-full relative'>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} width={window.innerWidth} height={window.innerHeight} />
      {router.pathname !== '/matrix' && (
        <>
      <div className='w-full sticky top-0 z-20 mb-4'>
        {router.pathname !== '/' && (
          <div className='flex items-center bg-dark-transparent px-10 py-2 gap-10 w-full'>
            <img className='h-10 w-10' src='/icons/gpt-icon.png' alt='gpt-icon' />
            <Navigations className='flex gap-10 justify-end m-2' />
          </div>
        )}
      </div>
      <div className={cn('absolute h-screen pt-20 flex justify-center items-center w-full')}>
        <div className='flex-1 w-full h-full'>
          {children}
        </div>
      </div>
      </>
      )}
      </div>
  )
}

export default MatrixRain
