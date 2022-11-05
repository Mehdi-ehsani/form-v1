import { toast } from 'react-toastify';

export const notification = (type) => {
   if(type === "success"){
    toast.success('ثبت نام با موفقیت انجام شد', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
   }else {
    toast.error('خطا در ثبت نام !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
   }
}