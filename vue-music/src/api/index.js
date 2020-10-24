import axios from "../utils/http"
import base from './base'

const api = {
    getMusicList(params){
        return axios.get(base.baseUrl + base.music,{
            params:params
        })
    }

}

export default api;