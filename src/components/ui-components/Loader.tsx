import { FunctionComponent } from 'react'
import LoaderEl from 'react-spinners/ScaleLoader'
import { CircularProgress } from '@mui/material'

interface Props {
  size?: 'large' | 'medium' | 'small'
}

const Loader: FunctionComponent<Props> = ({ size = 'medium' }) => {
  return (
    <div className='flex items-center justify-center mx-6 my-4 text-primary'>
      {size === 'large' && <LoaderEl height={54} width={6} radius={3} margin={3} color='#FFF' />}
      {size === 'medium' && <LoaderEl height={35} width={4} radius={2} margin={2} color='#FFF' />}
      {size === 'small' && <LoaderEl height={18} width={2} radius={1} margin={1} color='#FFF' />}
    </div>
  )
}

export default Loader

export const ButtonLoader: FunctionComponent = () => {
  return <CircularProgress size={20} style={{ color: 'black', marginLeft: 5 }} />
}
