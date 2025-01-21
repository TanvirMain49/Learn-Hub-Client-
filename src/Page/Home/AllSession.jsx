import React from 'react';
import useSessionCard from '../../Hooks/useSessionCard';
import SessionCard from '../../Shared/SessionCard';

const AllSession = () => {
    const {card} = useSessionCard();
    // console.log(card);
    return (
        <div>
            
            <div className='w-11/12 mx-auto gird grid-cols-3 gap-6'>
                {
                    card.map(item =><SessionCard key={item._id} item={item}></SessionCard>)
                }
            </div>
        </div>
    );
};

export default AllSession;