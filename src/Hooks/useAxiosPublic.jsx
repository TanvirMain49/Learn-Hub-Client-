import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://learn-hub2.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;