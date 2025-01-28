import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSessionCard = (currentPage, itemPerPage) => {
    const axiosPublic = useAxiosPublic();
    const {data: card=[], refetch} = useQuery({
        queryKey:['session-card', currentPage, itemPerPage],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/session?page=${currentPage}&limit=${itemPerPage}`)
            return res.data;
        }
    })
    return {card, refetch}
};

export default useSessionCard;