// import { LOGIN_TOKEN } from '@/global/constants'
// import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config/index';
import ApiRequest from './request/index';

const api = new ApiRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestSuccessFn: (config) => {
            // 每一个请求都自动携带 token
            //   const token = localCache.getCache(LOGIN_TOKEN)
            //   if (config.headers && token) {
            //     config.headers.Authorization = 'Bearer ' + token
            //   }
            return config;
        }
    }
});

export default api;
