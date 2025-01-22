import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';


const imgApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Imge_Key}`;

const UpdateModal = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: material, isLoading, isError } = useQuery({
    queryKey: ['material', user?.email],
    queryFn: async () => {
      const req = await axiosSecure.get(`/materials/${user?.email}?id=${item._id}`);
      return req.data;
    },
    enabled: !!user?.email, // Ensures the query runs only if the email is available
  });

  console.log(material);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    const imageUrl = {image: data.image[0]};
    const imgRes = await axiosPublic.post(imgApi, imageUrl, {
        headers:{
            "content-type": "multipart/form-data"
        }
    })
    if(imgRes.data.success){
        const material = {
            sessionId: item._id,
            email: user?.email,
            image: imgRes.data?.data?.display_url,
            doc: data.doc,
          };
      
          const res = await axiosSecure.patch(`/materials/${item._id}`, material);
          console.log(res.data);
      
          if (res.data.modifiedCount > 0) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: 'success',
              title: `${item.title} is updated`,
            });
          }
          reset();
          document.getElementById('my_modal_2').close();
        };
    }


  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while the data is being fetched
  }

  if (isError) {
    return <div>Error loading material data.</div>; // Handle error case
  }

  return (
    <dialog id="my_modal_2" className="modal">
      <form className="modal-box max-w-3xl" onSubmit={handleSubmit(onSubmit)}>
        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById('my_modal_2').close()}
        >
          ✕
        </button>

        {/* Material text */}
        <div className="flex justify-between items-center">
          <img src={item.imageUrl} alt="" className="w-72 rounded-sm" />
          <div className="space-y-3 text-left">
            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">Session Name:</span>{' '}
              {item.title}
            </h3>
            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">Session Id:</span>{' '}
              {item._id}
            </h3>
            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">Tutor Email:</span>{' '}
              {item.tutorEmail}
            </h3>
          </div>
        </div>

        {/* Material input section */}
        <h1 className="text-2xl font-bold mt-16 text-center">Upload Your Material</h1>

        {/* Image section */}
        <div className="form-control">
          <label htmlFor="image" className="label font-semibold text-center">
            Session Image
          </label>
          <input
            {...register('image')}
            type="file"
            accept="image/*"
            className="file-input file-input-bordered border-black w-full"
          />
        </div>

        {/* Google Drive link */}
        <div className="form-control mb-8">
          <label htmlFor="doc" className="label font-semibold text-center">
            Google Drive Link
          </label>
          <input
            {...register('doc')}
            type="text"
            placeholder="Google Drive Link..."
            className="input input-bordered border-black w-full"
            defaultValue={material?.doc || ''}
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-center items-center mt-8">
          <button
            type="submit"
            className="flex items-center btn font-bold text-base border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Update Material
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default UpdateModal;
