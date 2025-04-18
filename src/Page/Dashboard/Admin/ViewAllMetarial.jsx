import React from 'react';
import DasHeading from '../../../Shared/DashBoardHeading';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import ViewMaterialCard from './ViewMaterialCard';

const ViewAllMaterial = () => {
    const axiosSecure = useAxiosSecure();
    const {data: materials=[], refetch} = useQuery({
        queryKey:['materials',],
        queryFn: async()=>{
            const res = await axiosSecure.get('allMaterial')
            return res.data;
        }
    })

    return (
        <div>
            <DasHeading Heading="Mange All Material" subHeading="Organize Material"></DasHeading>
            <div className='md:w-11/12 md:mx-auto grid md:grid-cols-3 grid-cols-1 gap-8'>
                {
                    materials.map(material=><ViewMaterialCard key={material._id} material={material} refetch={refetch}></ViewMaterialCard>)
                }
            </div>
        </div>
    );
};

export default ViewAllMaterial;