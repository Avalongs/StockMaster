"use client";
import type { MenuProps } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Dropdown, Avatar } from "antd";
import Image from "next/image";
import { setUserLocal } from "@/utils";
import { useTranslations } from "next-intl";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        个人信息
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        退出登录
      </a>
    ),
  },
];
const language: MenuProps["items"] = [
  {
    key: "zh",
    label: <a onClick={() => setUserLocal("zh")}>简体中文</a>,
  },
  {
    key: "zh-TW",
    label: <a onClick={() => setUserLocal("zh-TW")}>繁體中文</a>,
  },
  {
    key: "en",
    label: <a onClick={() => setUserLocal("en")}>English</a>,
  },
];
export default function Header() {
  const t = useTranslations("Layout");
  return (
    <header className="header h-[56px] flex items-center justify-between border-b-1 border-[#E7E7E7]">
      <div className="logo w-[232px] h-[56px] flex items-center justify-center">
        <Image
          width={150}
          height={39}
          src="https://bj-img.justh5.com/newBigScreen/logo.png"
          alt="logo"
        />
      </div>
      <div className="userInfo pr-[24px] flex items-center gap-[20px]">
        <Dropdown menu={{ items: language }}>
          <a
            onClick={(e) => e.preventDefault()}
            className="cursor-pointer leading-[56px] text-[14px] gap-[8px] flex items-center"
          >
            {t("language")}
            <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a
            onClick={(e) => e.preventDefault()}
            className="cursor-pointer leading-[56px] text-[14px] gap-[8px] flex items-center"
          >
            <Avatar size={20} icon={<UserOutlined />} />
            <span className="gap-[4px] flex items-center">
              admin
              <DownOutlined />
            </span>
          </a>
        </Dropdown>
      </div>
    </header>
  );
}
