import { Button } from '@mui/material'
import Head from 'next/head'
import { Configuration, OpenAIApi } from 'openai'
import { FunctionComponent, useState } from 'react'

const HomePage: FunctionComponent = () => {
  const [response, setResponse] = useState < String | undefined >('')
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY
  })
  const openai = new OpenAIApi(configuration)

  const handleClick = async (): Promise<void> => {
    await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Hello World.' }
      ]
    }).then(({ data }) => {
      setResponse(data.choices[0].message?.content)
    }).catch(e => console.error(e))
  }

  return (
    <>
      <Head>
        <title>GPT 3.5 turbo</title>
      </Head>
      <div className='grid grid-cols-2'>
        <Button onClick={handleClick}>Click me</Button>
        {response !== undefined && (
          <h1>{response}</h1>
        )}
        <div>a</div>
      </div>
    </>
  )
}

export default HomePage
