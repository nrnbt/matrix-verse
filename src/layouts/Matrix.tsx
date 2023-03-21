import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useEffect, FunctionComponent } from 'react'

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
    <div className='flex'>
      <div className='flex flex-col justify-center items-center text-center w-1/5 h-screen bg-black'>
        <div className='text-4xl pb-8 neon-text'>GPT 3.5 Turbo</div>
        <div className='text-xl'>GPT-3.5 models can understand and generate natural language or code. Our most capable and cost effective model in the GPT-3.5 family is gpt-3.5-turbo which has been optimized for chat but works well for traditional completions tasks as well.</div>
        <div className='flex flex-col justify-center items-center p-4 gap-4'>
          <div className='pt-4'>Choose one of below</div>
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
      <canvas ref={canvasRef} width={window.innerWidth / 5 * 4} height={window.innerHeight} />
      <div style={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%, -50%)', width: window.innerWidth / 5 * 4 }}>
        <div className='flex justify-end w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MatrixRain
