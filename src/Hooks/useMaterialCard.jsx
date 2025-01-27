import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMaterialCard = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: items = [], refetch } = useQuery({
      queryKey: ["session", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/materialItems/${user?.email}`);
        return res.data;
      },
    });

    return {items, refetch};
};

export default useMaterialCard;