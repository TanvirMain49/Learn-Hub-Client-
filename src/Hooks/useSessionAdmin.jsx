import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useSessionAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {data: cardAdmin=[], refetch} = useQuery({
        queryKey:['cardAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/sessionAdmin`);
            return res.data;
        }
    })
    return {cardAdmin, refetch}
};

export default useSessionAdmin;