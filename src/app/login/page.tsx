"use client";
import styles from "./login.module.css";
import { useRouter } from "next-nprogress-bar";
export default function Login() {
  const router = useRouter();
  const handleLogin = () => {
    // 登录成功后设置cookie
    document.cookie = "token=123123;path=/";
    router.push("/home");
  };
  return (
    <div>
      <h1 className={styles.login}>我是登录页</h1>
      <button onClick={handleLogin}>登录进入首页</button>
    </div>
  );
}
