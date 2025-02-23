import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

export default function useTutor() {
    const axiosSecure = useAxiosSecure();
    const{data: tutors=[], refetch} = useQuery({
        queryKey:['tutor'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/tutor`)
            return res.data;
        }
    })
    return {tutors, refetch};
}
