import Image from 'next/image'
import planeIcon from '@/assets/icons/planeicon.svg'

export default function StepLine() {
  return (
    <div className='flex flex-col items-center w-10 h-full gap-2'>
      <div className='w-0.5 h-full bg-slate-300' />
      <div className='size-5 relative'>
        <Image
          src={planeIcon}
          height={20}
          width={20}
          alt='plane icon'
        />
      </div>
      <div className='w-0.5 h-full bg-slate-300' />
    </div>
  )
}
