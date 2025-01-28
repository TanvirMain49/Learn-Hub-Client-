// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxiosSecure';

// const useGetSessionCount = () => {
//     const axiosSecure = useAxiosSecure();
//     const { data:count, refetch } = useQuery({
//         queryKey: ['count'],
//         queryFn: async () => {
//             const res = await axiosSecure.get("/sessionCount")
//             return res.data;
//         }
//     });

//     console.log(count);
//     return { count};
// };

// export default useGetSessionCount;
