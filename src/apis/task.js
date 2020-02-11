// DÙng để gọi api riêng biệt cho từng modul. Sử dụng axios servire để gọi
import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants';

// http://localhost:3000/tasks
const url = 'tasks';// Vì đã đặt API_ENDPOINT = http://localhost:3000

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};

// .Interceptors Dùng để xử lý data từ service trả về