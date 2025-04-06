"use client";
import Header from "./components/Header";
import type { MenuProps } from "antd";
import { Menu } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
import { useTranslations } from "next-intl";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sider = useTranslations("Sider");
  const items: MenuItem[] = [
    {
      key: "sub1",
      label: sider("Good.title"),
      children: [
        { key: "5", label: sider("Good.list") },
        { key: "6", label: sider("Good.category") },
      ],
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="wrapper flex flex-col h-[100vh]">
      <Header />
      <div className="layout flex gap-[20px] flex-1">
        <div className="sider">
          <Menu
            onClick={onClick}
            className="h-[100%] min-w-[232px]"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
