"use client";
import Header from "./components/Header";
import type { MenuProps } from "antd";
import { Menu } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const selectedKey = pathSegments[pathSegments.length - 1] || "";
  const openKey = `/${pathSegments[0]}`;
  const sider = useTranslations("Sider");
  const items: MenuItem[] = [
    {
      key: "/good",
      label: sider("Good.title"),
      children: [
        { key: "/list", label: sider("Good.list") },
        { key: "/category", label: sider("Good.category") },
      ],
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    const path = e.keyPath.reverse().join("");
    router.push(path);
  };
  return (
    <div className="wrapper flex flex-col h-[100vh]">
      <Header />
      <div className="layout flex gap-[20px] flex-1 bg-[#F8F8F8]">
        <div className="sider">
          <Menu
            onClick={onClick}
            className="h-[100%] min-w-[232px]"
            defaultSelectedKeys={[`/${selectedKey}`]}
            defaultOpenKeys={[openKey]}
            mode="inline"
            items={items}
          />
        </div>
        <div className="content flex-1">{children}</div>
      </div>
    </div>
  );
}
