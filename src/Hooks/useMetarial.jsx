import React from 'react';
import { useQuery } from '@tanstack/react-query';


const useMaterial = () => {
    const {user} = useAuth();
    const {data: material} = useQuery({
        queryKey:['material', user?.email],
        queryFn: async()=>{
            const req = await axiosSecure.get(`/materials/${user?.email}?id=${item._id}`)
            return req.data; 
        }
    })
    return {material}
};

export default useMaterial;