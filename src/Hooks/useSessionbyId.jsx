import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSessionById = (id) => {
    const axiosSecure = useAxiosSecure();
    const {data: item={}, refetch, isLoading} = useQuery({
        queryKey:['item', id],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/session/${id}`)
            return res.data
        }
    })
    return {item, isLoading, refetch};
};

export default useSessionById;