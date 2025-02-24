import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

export default function useProfileInfo() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const{data: profile=[], refetch} = useQuery({
        queryKey:['user'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res.data;
        }
    })
    return {profile, refetch};
}
