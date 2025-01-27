import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSessionCard = () => {
    const axiosPublic = useAxiosPublic();
    const {data: card=[], refetch} = useQuery({
        queryKey:['session-card'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/session')
            return res.data;
        }
    })
    return {card, refetch}
};

export default useSessionCard;