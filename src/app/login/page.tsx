"use client";
import { useRouter } from "next-nprogress-bar";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const t = useTranslations("Login");
  const router = useRouter();
  const handleLogin = () => {
    // 登录成功后设置cookie
    document.cookie = "token=123123;path=/";
    router.push("/home");
  };
  return (
    <div className="bg-white p-[20px] flex items-center justify-center gap-[130px] box-border w-screen h-screen">
      <div className="flex flex-col w-[430px] ml-[122px] gap-[52px]">
        <h1 className="text-black text-[30px] font-bold">{t("title")}</h1>
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#999] text-[13px]">{t("account")}</div>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              value={account}
              placeholder={t("placeholderAccount")}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#999] text-[13px]">{t("password")}</div>
            <Input.Password
              value={password}
              placeholder={t("placeholderPassword")}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
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
