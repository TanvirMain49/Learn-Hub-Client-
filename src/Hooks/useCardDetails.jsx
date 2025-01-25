import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCardDetails = (id) => {
    const axiosSecure = useAxiosSecure();
    const { data: items = [], refetch } = useQuery({
      queryKey: ["session", id],
      queryFn: async () => {
        const res = await axiosSecure.get(`/session/${id}`);
        return res.data;
      },
    });
    return {items, refetch};
};

export default useCardDetails;