import { FunctionComponent } from 'react'
import LoaderEl from 'react-spinners/ScaleLoader'
import { CircularProgress } from '@mui/material'

interface Props {
  size?: 'large' | 'medium' | 'small'
}

const Loader: FunctionComponent<Props> = ({ size = 'medium' }) => {
  return (
    <div className='flex items-center justify-center m-6 text-primary'>
      {size === 'large' && <LoaderEl height={54} width={6} radius={3} margin={3} color='#696969' />}
      {size === 'medium' && <LoaderEl height={35} width={4} radius={2} margin={2} color='#696969' />}
      {size === 'small' && <LoaderEl height={18} width={2} radius={1} margin={1} color='#696969' />}
    </div>
  )
}

export default Loader

export const ButtonLoader: FunctionComponent = () => {
  return <CircularProgress size={20} style={{ color: 'black', marginLeft: 5 }} />
}
