import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = (search) => {
    if(!search) search = ''
    const axiosSecure = useAxiosSecure();
    const{data: users=[], refetch} = useQuery({
        queryKey:['user',search],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users?search=${search}`)
            return res.data;
        }
    })
    return {users, refetch};
};

export default useUser;