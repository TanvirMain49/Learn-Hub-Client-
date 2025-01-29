import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email, 
    });
    const isRole = data?.role;
    return { isRole, isLoading, isError };
};

export default useRole;
