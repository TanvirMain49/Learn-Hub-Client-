import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSessionCard = () => {
    const axiosPublic = useAxiosPublic();
    const {data: sessionCard=[]} = useQuery({
        queryKey:['session-card'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/session')
            return res.data
        }
    })
    return {sessionCard}
};

export default useSessionCard;