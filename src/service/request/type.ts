import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// 计算AxiosRequestConfig配置进行扩展
export interface RequestInterceptors<T = AxiosResponse> {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestFailureFn?: (err: any) => any;
    responseSuccessFn?: (res: T) => T;
    responseFailureFn?: (err: any) => any;
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: RequestInterceptors<T>;
}
