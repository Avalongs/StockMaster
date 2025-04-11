"use client";
import "@ant-design/v5-patch-for-react-19";
import { Form, Input, Space, Button, Select, Row, Col, DatePicker } from "antd";
import { useTranslations } from "next-intl";
import dayjs from "dayjs";
import { SearchFormProps } from "./type";

export default function SearchForm({
  onSearch,
  onReset,
}: {
  onSearch: (values: SearchFormProps) => void;
  onReset: (values: SearchFormProps) => void;
}) {
  const t = useTranslations("Good.List");
  const [form] = Form.useForm<SearchFormProps>();
  const onFinish = (values: SearchFormProps) => {
    // 查询条件优化
    if (values.time) {
      const [startDate, endDate] = values.time.map((item) =>
        dayjs(item).format("YYYY-MM-DD")
      );
      values.startDate = startDate;
      values.endDate = endDate;
    }
    onSearch(values);
  };
  const reset = () => {
    form.resetFields();
    const values = form.getFieldsValue();
    onReset(values);
  };
  return (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item name="goodsName" label={t("name")}>
            <Input placeholder={t("placeholder.name")} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="goodsCategory" label={t("category")}>
            <Select placeholder={t("placeholder.category")}>
              <Select.Option value={1}>分类1</Select.Option>
              <Select.Option value={2}>分类2</Select.Option>
              <Select.Option value={3}>分类3</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="status" label={t("statusLabel")}>
            <Select placeholder={t("placeholder.status")}>
              <Select.Option value={1}>{t("status.online")}</Select.Option>
              <Select.Option value={0}>{t("status.offline")}</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="time" label={t("createTime")}>
            <DatePicker.RangePicker
              placeholder={[
                t("placeholder.startTime"),
                t("placeholder.endTime"),
              ]}
              style={{ width: "100%" }}
              format="YYYY-MM-DD"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Space size="middle">
            <Button type="primary" htmlType="submit">
              {t("search")}
            </Button>
            <Button htmlType="button" onClick={reset}>
              {t("reset")}
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
}
