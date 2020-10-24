import base from './base'
import axios from "../utils/https"

const api = {
    getList(){
        return axios.get(base.baseUrl + base.list);
    }
}

export default api;