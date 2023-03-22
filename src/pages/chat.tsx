import Loader, { ButtonLoader } from '@/components/ui-components/Loader'
import { IconButton, TextField, useMediaQuery } from '@mui/material'
import Head from 'next/head'
import { Configuration, OpenAIApi } from 'openai'
import { FunctionComponent, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import cn from 'classnames'
import { COLORS } from '@/site-settings/theme/color'
import { Prism } from 'react-syntax-highlighter'
import theme from '@/site-settings/theme/mui-theme'

const ChatPage: FunctionComponent = () => {
  const [messages, setMessages] = useState<Array<{role: 'system' | 'user' | 'assistant', content: string, name?: string}>>([])
  const [userMsg, setUserMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY
  console.log(apiKey)
  const configuration = new Configuration({
    apiKey
  })
  const openai = new OpenAIApi(configuration)
  const mobileLayout = useMediaQuery(theme.breakpoints.down('md'))

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
      <div className='flex flex-col h-full justify-center items-center w-screen gap-2 p-4'>
        <div className='flex flex-col w-full h-full border-2 overflow-y-auto rounded-xl'>
          {messages !== undefined && messages.length > 0 && messages.map((msg, idx) => (
            <div key={idx} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
              <p
                className={cn('flex flex-col text-xl p-4 m-7 w-fit h-fit rounded-lg max-w-7xl',
                  msg.role === 'user' ? 'bg-gray-600 font-semibold text-end' : 'bg-emerald-800 font-bold'
                )}
              >
                {
                  msg.content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).map((block, idx) => {
                    if (block.match('/`[^`]*[^`]`') != null) {
                      return <pre key={idx}><code className='font-bold'>{block}</code></pre>
                    } else if (block.startsWith('```')) {
                      return (
                        <Prism key={idx} language='jsx'>
                          {block.slice(3, -3)}
                        </Prism>
                      )
                    } else {
                      return <div key={idx}>{block}</div>
                    }
                  })
                }
              </p>
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
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            className='w-full h-fit rounded-lg'
            size={mobileLayout ? 'small' : 'medium'}
            sx={{
              input: { color: COLORS.primary.dark }
            }}
            onKeyDown={(e) => {
              e.keyCode === 13 && handleClick()
            }}
          />
          <IconButton className={mobileLayout ? 'w-11 h-11 rounded-full' : 'w-16 h-16 rounded-full'} onClick={handleClick}>{loading ? <ButtonLoader /> : <SendIcon />}</IconButton>
        </div>
      </div>
    </>
  )
}

export default ChatPage
