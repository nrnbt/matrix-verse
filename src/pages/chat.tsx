import Loader, { ButtonLoader } from '@/components/ui-components/Loader'
import { IconButton, TextField } from '@mui/material'
import Head from 'next/head'
import { Configuration, OpenAIApi } from 'openai'
import { FunctionComponent, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import cn from 'classnames'
import { COLORS } from '@/site-settings/theme/color'

const ChatPage: FunctionComponent = () => {
  const [messages, setMessages] = useState<Array<{role: 'system' | 'user' | 'assistant', content: string, name?: string}>>([])
  const [userMsg, setUserMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY
  })
  const openai = new OpenAIApi(configuration)

  const handleClick = async (): Promise<void> => {
    if (loading || userMsg === '') {
      return
    }
    setUserMsg('')
    setLoading(true)
    messages.push({ role: 'user', content: userMsg })
    await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages
    })
      .then(({ data }) => {
        data.choices[0].message !== undefined && messages.push(data.choices[0].message)
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Head>
        <title>Chat GPT 3.5 turbo</title>
      </Head>
      <div className='flex flex-col justify-center items-center h-screen w-screen overflow-y-auto gap-2 p-4'>
        <div className='flex flex-col h-full w-full border-2 overflow-y-auto rounded-xl'>
          {messages !== undefined && messages.length > 0 && messages.map((msg, idx) => (
            <div key={idx} className={cn('flex', msg.role === 'user' ? 'justify-start' : 'justify-end')}>
              <p
                className={cn('flex text-xl p-4 m-2 w-fit rounded-lg',
                  msg.role === 'user' ? 'bg-gray-600 font-semibold' : 'text-end bg-emerald-800 font-bold'
                )}
              >{msg.content}
              </p>
            </div>
          ))}
          {loading && <Loader />}
        </div>
        <div className='flex w-full gap-2'>
          <TextField
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            className='w-full rounded-lg'
            sx={{
              input: { color: COLORS.primary.dark }
            }}
            onKeyDown={(e) => {
              e.keyCode === 13 && handleClick()
            }}
          />
          <IconButton className='w-16' onClick={handleClick}>{loading ? <ButtonLoader /> : <SendIcon />}</IconButton>
        </div>
      </div>
    </>
  )
}

export default ChatPage
