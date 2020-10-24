import base from "./base"
import axios from "../utils/http"
//引入封装好的axios直接使用
const api = {
    // 成品接口
    getChengpin(){
        return axios.get(base.baseUrl + base.chengpin);
    }
}

export default api;
// 定义的啥导出啥