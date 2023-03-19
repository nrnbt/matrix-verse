import Loader, { ButtonLoader } from '@/components/ui-components/Loader'
import { IconButton, TextField } from '@mui/material'
import Head from 'next/head'
import { Configuration, OpenAIApi } from 'openai'
import { FunctionComponent, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import cn from 'classnames'

const ChatPage: FunctionComponent = () => {
  const [messages, setMessages] = useState<Array<{role: 'system' | 'user' | 'assistant', content: string, name?: string}>>([])
  const [userMsg, setUserMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY
  })
  const openai = new OpenAIApi(configuration)

  const handleClick = async (): Promise<void> => {
    if (loading) {
      return
    }
    setUserMsg('')
    setLoading(true)
    messages.push({ role: 'user', content: userMsg })
    await openai.createFineTune({
      model: 'gpt-3.5-turbo',
      training_file: ''
    })
      .then(({ data }) => {
        data.choices[0].message !== undefined && messages.push(data)
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Head>
        <title>Fine-tunning GPT 3.5 turbo</title>
      </Head>
      <div className='flex flex-col justify-center items-center h-screen overflow-y-auto gap-2 p-4'>
        <div className='flex flex-col h-full w-full border-2 overflow-y-auto'>
          {
            messages !== undefined && messages.length > 0 && messages.map((msg, idx) => (
              <p key={idx} className={cn('text-2xl pl-4 pt-4', msg.role === 'user' ? 'font-semibold' : 'font-bold')}>{msg.content}</p>
            ))
          }
          {loading && <Loader />}
        </div>
        <div className='flex w-full gap-2'>
          <TextField
            label='Type something ...'
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            className='w-full'
            onKeyDown={(e) => {
              e.keyCode === 13 && handleClick()
            }}
          />
          <div className='flex border-2'>
            <IconButton onClick={handleClick}>{loading ? <ButtonLoader /> : <SendIcon />}</IconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatPage
