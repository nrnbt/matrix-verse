import Loader, { ButtonLoader } from '@/components/ui-components/Loader'
import { IconButton, TextField } from '@mui/material'
import Head from 'next/head'
import { Configuration, OpenAIApi } from 'openai'
import { FunctionComponent, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { COLORS } from '@/site-settings/theme/color'

const ImagePage: FunctionComponent = () => {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState < String | undefined >('')
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY
  })
  const openai = new OpenAIApi(configuration)

  const handleClick = async (): Promise<void> => {
    if (loading) {
      return
    }
    setPrompt('')
    setLoading(true)
    await openai.createImage({
      size: '1024x1024',
      n: 1,
      prompt,
      response_format: 'url'
    })
      .then(({ data }) => {
        setResponse(data?.data[0].url)
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Head>
        <title>Image GPT 3.5 turbo</title>
      </Head>
      <div className='flex flex-col justify-center items-center h-screen overflow-y-auto gap-2 p-4 w-screen'>
        <div className='flex flex-col h-full w-full border-2 overflow-y-auto rounded-xl'>
          {!loading
            ? (
                response !== undefined && response !== '' && (
                  <img src={response.toString()} alt={prompt} className='w-96' />
                )
              )
            : (
              <Loader />
              )}
        </div>
        <div className='flex w-full gap-2'>
          <TextField
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className='w-full rounded-lg'
            onKeyDown={(e) => {
              e.keyCode === 13 && handleClick()
            }}
            sx={{
              input: { color: COLORS.primary.dark }
            }}
          />
          <div className='flex'>
            <IconButton
              className='w-16 rounded-full'
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
