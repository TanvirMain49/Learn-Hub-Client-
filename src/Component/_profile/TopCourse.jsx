import React from 'react'
import useSessionAdmin from '../../Hooks/useSessionAdmin';

export default function TopCourse() {
    const { cardAdmin, refetch } = useSessionAdmin();
    const successCard = cardAdmin.filter(item=>item.status === "success")
  return (
    <div>
        <h1 className='text-lg font-bold mb-2'>Top Course</h1>
      {
        successCard.slice(0, 6).map(card =>(
            <div className='flex flex-wrap p-3 items-center gap-3 rounded-xl mb-3 bg-white dark:bg-neutral-700 border border-black'>
                <img src={card.imageUrl} alt="" className='h-10 w-10 rounded-md object-cover'/>
                <h1 className='text-base font-semibold dark:text-white/80'>{card.title}</h1>
            </div>
        ))
      }
    </div>
  )
}
