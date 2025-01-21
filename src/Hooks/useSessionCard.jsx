import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSessionCard = () => {
    const axiosPublic = useAxiosPublic();
    const {data: card=[]} = useQuery({
        queryKey:['session-card'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/session')
            return res.data;
        }
    })
    console.log(card);
    return {card}
};

export default useSessionCard;