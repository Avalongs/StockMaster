// 用户相关接口类型
export interface LoginRequest {
  account: string;
  password: string;
  remember?: boolean;
}
