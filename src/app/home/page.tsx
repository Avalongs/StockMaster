export default async function Home() {
  const data = await getData();
  return (
    <div>
      <h1>我是{data.title}</h1>
    </div>
  );
}
async function getData() {
  return {
    title: "首页",
  };
}
