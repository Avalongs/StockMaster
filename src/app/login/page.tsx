"use client";
import { useRouter } from "next-nprogress-bar";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Input from "@/components/ui/Input";
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
    <div className="bg-white p-[20px] flex items-center justify-center gap-[130px] box-border w-screen h-screen">
      <div className="flex flex-col w-[430px] ml-[122px] gap-[52px]">
        <h1 className="text-black text-[30px] font-bold">{t("title")}</h1>
        <h2 className="flex flex-col text-[16px] gap-[6px]">
          <span>{t("subtitle")}</span>
          <p>
            <span>{t("subtitle2")}</span>
            <span
              className="ml-[10px] text-[#0c21c1] cursor-pointer"
              onClick={register}
            >
              {t("register")}
            </span>
          </p>
        </h2>
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#999] text-[13px]">{t("email")}</div>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder={t("placeholderEmail")}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#999] text-[13px]">{t("password")}</div>
            <Input
              id="password"
              type="password"
              required
              placeholder={t("placeholderPassword")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div></div>
          <button
            className="text-white flex justify-center items-center text-[17px] border-none cursor-pointer h-[53px] w-full bg-[#0c21c1] rounded-[32px]"
            onClick={handleLogin}
          >
            {t("login") || t("registerBtn")}
          </button>
        </div>
      </div>
      <div className="flex-1 h-full rounded-[16px] border-1 border-solid border-black bg-[#000842]"></div>
    </div>
  );
}
