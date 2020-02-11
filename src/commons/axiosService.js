// Để gọi api và xử lý header(Để bảo mật api) 
import axios from 'axios';

class AxiosService {

    constructor() {
        const instance = axios.create();
        // .Interceptors Dùng để xử lý data từ service trả về
        instance.interceptors.response.use(this.handleSuccess, this.handleError);//Nhận dc response hoặc error nếu có lỗi
        this.instance = instance;
    }

    handleSuccess(responce) {
        return responce;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url);
    }

}

export default new AxiosService();