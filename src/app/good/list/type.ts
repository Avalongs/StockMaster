export interface SearchFormProps {
  goodsName: string;
  goodsCategory: number;
  status: number;
  time: Date[];
  startDate: string;
  endDate: string;
}
export interface dataSource {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: number;
  createTime: string;
  updateTime: string;
}
