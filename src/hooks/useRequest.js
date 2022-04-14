import axios from "axios"; // 引入axios
import qs from "qs"; // 引入qs模块，用来序列化post类型的数据
import { ref } from "vue";
import {useUserState} from "@/store/user";
import {storeToRefs} from "pinia";
import router from "@/router";
const userStore = useUserState()
const {userObj} = storeToRefs(userStore)

export function useRequest() {
    const isLoading = ref(false);
    let request = (url, method = "get", data = {}, config = {}) => {
        // 环境的切换
        if (process.env.NODE_ENV == "development") {
            // 开发环境
            axios.defaults.baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net";
        } else if (process.env.NODE_ENV == "debug") {
            // 测试环境
            axios.defaults.baseURL = "http://33.33.33.33:8888";
        } else if (process.env.NODE_ENV == "production") {
            // 生产环境
            axios.defaults.baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net";
        }
        return axiosRequest(url, method, data, config);
    };
    function axiosRequest(url, method, data, config) {
        if (method.toLocaleLowerCase() === "post") {
            // { indices: false } 解决后端接收 post请求 正确的传递参数
            data = qs.stringify(data, { indices: false });
            console.log('axios请求参数=========',qs.parse(data));
        }

        let axiosConfig = {
            url: url,
            method: method.toLocaleLowerCase(),
            data: data,
            timeout: 300000,
            //headers: {
            //  'Content-Type': 'application/x-www-form-urlencoded'
            //}
        };

        if (config instanceof Object) {
            for (let key in config) {
                axiosConfig[key] = config[key];
            }
        }
        return axios(axiosConfig).then((res) => res.data);
    }
    // 添加请求拦截器 === 如果有token进行头部携带
    axios.interceptors.request.use(
        (res) => {
            // 2. 判断是否有token
            if(userObj.token){
                // 3. 设置token
                res.headers = {
                    // Authorization: "Bearer xxxxxx",
                    Authorization: `Bearer ${userObj.token}`
                }
            }
            console.log("请求成功");
            isLoading.value = true;
            return res;
        },
        (error) => {
            console.log("请求失败");
            isLoading.value = false;
            //   console.log(isLoading.value, 'loading');
            return Promise.reject(error);
        }
    );
    // 添加响应拦截器 === 1. 剥离无效数据 2. 处理token失效
    axios.interceptors.response.use(
        (res) => {
            console.log("响应成功");
            isLoading.value = false;
            return res;
        },
        (error) => {
            if(error.response && error.response.status === 401){
                //1.清空无效用户信息
                userStore.setUser({})
                //2.跳转到登录页码
                //3.跳转需要传参(当前路由地址)给登录页码
                // 获取当前路由地址 router.currentRoute.value.fullPath router.currentRoute 是ref响应式
                const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
                router.push('/login?redirectUrl=' + fullPath)
            }
            console.log("响应失败");
            isLoading.value = false;
            return Promise.reject(error);
        }
    );
    return {
        request,
        isLoading,
    };
}
