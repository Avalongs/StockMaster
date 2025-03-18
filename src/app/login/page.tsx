"use client";
import styles from "./login.module.scss";
import { useRouter } from "next-nprogress-bar";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <h1 className="text-3xl font-bold underline">测试</h1>
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
          <div className={styles.box}>
            <div className={styles.label}>{t("email")}</div>
            <input
              className={`${styles.email} ${styles.input}`}
              id="email"
              type="email"
              value={email}
              placeholder={t("placeholderPassword")}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.box}>
            <div className={styles.label}>{t("password")}</div>
            <input
              id="password"
              type="password"
              className={`${styles.password} ${styles.input}`}
              required
              placeholder={t("placeholderPassword")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.password}></div>
          <button className={styles.loginBtn} onClick={handleLogin}>
            {t("login") || t("registerBtn")}
          </button>
        </div>
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
}
