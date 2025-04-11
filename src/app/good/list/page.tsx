"use client";
import "@ant-design/v5-patch-for-react-19";
import { Button, Table, Image, Space } from "antd";
import type { TableProps } from "antd";
import { useTranslations } from "next-intl";
import { EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { dataSource, SearchFormProps } from "./type";
export default function List() {
  const t = useTranslations("Good.List");
  const [dataSource, setDataSource] = useState<dataSource[]>();
  const columns: TableProps<dataSource>["columns"] = [
    { title: t("table.id"), dataIndex: "id", key: "id" },
    {
      title: t("table.image"),
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Image
          width={80}
          src={image}
          preview={{
            maskClassName: "flex gap-[4px] items-center justify-center",
            mask: (
              <>
                <EyeOutlined style={{ fontSize: 14 }} />
                {t("table.preview")}
              </>
            ),
          }}
          rootClassName="custom-image-preview"
        />
      ),
    },
    { title: t("table.name"), dataIndex: "name", key: "name" },
    { title: t("table.category"), dataIndex: "category", key: "category" },
    { title: t("table.price"), dataIndex: "price", key: "price" },
    { title: t("table.stock"), dataIndex: "stock", key: "stock" },
    {
      title: t("table.status"),
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === 1 ? t("status.online") : t("status.offline"),
    },
    {
      title: t("table.createTime"),
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: t("table.updateTime"),
      dataIndex: "updateTime",
      key: "updateTime",
    },
    {
      title: t("table.action"),
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button key="edit" type="link" onClick={() => edit(record)}>
            {t("action.edit")}
          </Button>
          <Button
            key="statusBtn"
            type="link"
            onClick={() => changeStatus(record)}
          >
            {record.status === 1 ? t("status.offline") : t("status.online")}
          </Button>
          <Button key="delete" type="link" onClick={() => del(record)} danger>
            {t("action.delete")}
          </Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getList([
      {
        id: 1,
        name: "可口可乐",
        image:
          "https://www.go-easy.com.cn/images/201611/goods_img/5372_P_1478558668460.jpg",
        category: "饮料",
        price: 2.5,
        stock: 100,
        status: 1,
        createTime: "2021-01-01",
        updateTime: "2021-01-01",
      },
    ]);
  }, []);
  const getList = (values: Array<dataSource>) => {
    setDataSource(values);
  };
  const edit = (record: dataSource) => {
    console.log("编辑", record);
  };
  const changeStatus = (record: dataSource) => {
    console.log("上下架", record);
  };
  const del = (record: dataSource) => {
    console.log("删除", record);
  };
  const onReset = (value: SearchFormProps) => {
    console.log("重置", value);
  };
  const onSearch = (values: SearchFormProps) => {
    console.log("搜索", values);
  };
  const showAdd = () => {
    console.log("新增");
  };
  const exportList = () => {
    console.log("导出");
  };
  return (
    <div className="mt-[10px]">
      <div className="mb-[20px] bg-white p-[16px]">
        <SearchForm onSearch={onSearch} onReset={onReset} />
      </div>
      <div className="bg-white p-[16px]">
        <div className="flex gap-[24px] mb-[16px]">
          <Button type="primary" onClick={showAdd}>
            {t("add")}
          </Button>
          <Button type="primary" onClick={exportList}>
            {t("export")}
          </Button>
        </div>
        <Table<dataSource>
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </div>
  );
}
