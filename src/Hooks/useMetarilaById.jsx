import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMaterialById = (id) => {
    const axiosSecure = useAxiosSecure();
    console.log(id);
    const { data: item, refetch } = useQuery({
      queryKey: ["material", id],
      queryFn: async () => {
        const res = await axiosSecure.get(`/material/${id}`);
        return res.data;
      },
    });

    return {item, refetch};
};

export default useMaterialById;