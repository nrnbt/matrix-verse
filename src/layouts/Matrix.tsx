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
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} width={window.innerWidth} height={window.innerHeight} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        {router.pathname !== '/' && (
          <div className='bg-blue-500'>
            header
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export default MatrixRain
