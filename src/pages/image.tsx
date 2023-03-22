import Loader, { ButtonLoader } from '@/components/ui-components/Loader'
import { IconButton, TextField, useMediaQuery } from '@mui/material'
import Head from 'next/head'
import { Configuration, OpenAIApi } from 'openai'
import { FunctionComponent, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { COLORS } from '@/site-settings/theme/color'
import cn from 'classnames'
import theme from '@/site-settings/theme/mui-theme'

const ImagePage: FunctionComponent = () => {
  const [newPrompt, setNewPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<Array<{role: 'system' | 'user' | 'assistant', content: string | undefined }>>([])
  const mobileLayout = useMediaQuery(theme.breakpoints.down('md'))
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY
  })
  const openai = new OpenAIApi(configuration)

  const handleClick = async (): Promise<void> => {
    if (loading) {
      return
    }
    setLoading(true)
    content.push({ role: 'user', content: newPrompt })
    await openai.createImage({
      size: '1024x1024',
      n: 1,
      prompt: newPrompt,
      response_format: 'url'
    })
      .then(({ data }) => {
        content.push({ role: 'assistant', content: data?.data[0].url })
      })
      .catch(e => console.error(e))
      .finally(() => {
        setLoading(false)
        setNewPrompt('')
      })
  }

  return (
    <>
      <Head>
        <title>Image GPT 3.5 turbo</title>
      </Head>
      <div className='flex flex-col h-full justify-center items-center w-screen gap-2 p-4'>
        <div className='flex flex-col w-full h-full border-2 overflow-y-auto rounded-xl'>
          {content.length > 0 && content.map((con, idx) => (
            <div key={idx} className={cn('flex', con.role === 'user' ? 'justify-end' : 'justify-start')}>
              {con.role === 'user'
                ? (
                  <p className='flex flex-col text-xl p-4 m-4 w-fit h-fit rounded-lg max-w-7xl bg-gray-600 font-semibold text-end'>{con.content}</p>
                  )
                : (
                  <div className='flex border m-4'>
                    <img src={con.content} className='w-96' />
                  </div>
                  )}
            </div>
          ))}
          {loading && (
            <div className='flex bg-emerald-800 justify-start w-fit rounded-lg m-7'>
              <Loader size='small' />
            </div>
          )}
        </div>
        <div className='flex w-full gap-2'>
          <TextField
            value={newPrompt}
            onChange={(e) => setNewPrompt(e.target.value)}
            className='w-full h-fit rounded-lg'
            onKeyDown={(e) => {
              e.keyCode === 13 && handleClick()
            }}
            size={mobileLayout ? 'small' : 'medium'}
            sx={{
              input: { color: COLORS.primary.dark }
            }}
          />
          <div className='flex'>
            <IconButton
              className={mobileLayout ? 'w-11 h-11 rounded-full' : 'w-16 h-16 rounded-full'}
              disabled={loading}
              onClick={handleClick}
            >
              {loading ? <ButtonLoader /> : <SendIcon />}
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagePage
