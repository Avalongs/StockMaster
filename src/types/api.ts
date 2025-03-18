// API 请求响应类型
export type ApiResponse<T> = {
  code: number;
  message: string;
  data?: T;
};
