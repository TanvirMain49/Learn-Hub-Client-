import React from 'react';
import DasHeading from '../../../Shared/DashBoardHeading';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import NoteCard from './NoteCard';

const MangeNote = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data:notes=[] } = useQuery({
        queryKey:['note', user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`notes/${user?.email}`)
            return res.data
        }
    })
    console.log(notes);
    return (
        <div>
           <DasHeading Heading="Mange Note"></DasHeading>
           <div className='w-11/12 mx-auto grid grid-cols-3 gap-6'>
                {
                    notes.map(note=><NoteCard key={note._id} note={note}></NoteCard>)
                }
           </div>
        </div>
    );
};

export default MangeNote;