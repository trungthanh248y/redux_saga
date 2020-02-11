//Import notify toastify, hàm gọi các toastify trung
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastError = error => {
    let message = null;
    if(typeof error === 'object' && error.message) {
        ( { message } = error );
    }
    if(message !== null && typeof message !== 'undefined' && message !== '') {
        toast.error(message);
    }
};
