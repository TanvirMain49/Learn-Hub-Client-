import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useNotes = (id) => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: note, refetch } = useQuery({
      queryKey: ["note", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/note/${id}`);
        return res.data;
      },
    });
    return {note, refetch};
};

export default useNotes;