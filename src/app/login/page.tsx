"use client";
import styles from "./login.module.scss";
import { useRouter } from "next-nprogress-bar";
import { useTranslations } from "next-intl";
export default function Login() {
  const t = useTranslations("Login");
  const router = useRouter();
  const handleLogin = () => {
    // 登录成功后设置cookie
    document.cookie = "token=123123;path=/";
    router.push("/home");
  };
  const register = () => {
    router.push("/register");
  };
  return (
    <div className={styles.login}>
      <div className={styles.leftBox}>
        <h1 className={styles.title}>{t("title")}</h1>
        <h2 className={styles.subtitle}>
          <span>{t("subtitle")}</span>
          <p>
            <span>{t("subtitle2")}</span>
            <span className={styles.register} onClick={register}>
              {t("register")}
            </span>
          </p>
        </h2>
        <div className={styles.formBox}>
          <div className={styles.email}></div>
          <div className={styles.password}></div>
          <button className={styles.loginBtn} onClick={handleLogin}>
            登录进入首页
          </button>
        </div>
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
}
