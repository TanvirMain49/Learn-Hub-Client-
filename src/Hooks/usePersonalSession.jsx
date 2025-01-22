import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePersonalSession = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: items = [] } = useQuery({
      queryKey: ["session", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/personalSession/${user?.email}`);
        return res.data;
      },
    });

    return {items};
};

export default usePersonalSession;