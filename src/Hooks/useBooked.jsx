import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBooked = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: bookedSessions = [], refetch } = useQuery({
      queryKey: ["bookedSessions", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/bookedSession/${user?.email}`);
        return res.data;
      },
    });
    return {bookedSessions, refetch};
};

export default useBooked;