import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center'>
            <div>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div>
                <TbBrandNextjs className='text-7xl' />
            </div>
        </div>
    </div>
  )
}

export default Technologies