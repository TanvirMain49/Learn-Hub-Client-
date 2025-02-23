import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSessionCard = (currentPage =0, itemPerPage=8, sortBy="default", dateFilter) => {
    const axiosPublic = useAxiosPublic();
    const {data: card=[], refetch} = useQuery({
        queryKey:['session-card', currentPage, itemPerPage, sortBy, dateFilter],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/session?page=${currentPage}&limit=${itemPerPage}&sortBy=${sortBy}`);
            return res.data;
        }
    })
    console.log(card)
    return {card, refetch}
};

export default useSessionCard;