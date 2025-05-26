export type ProductParam = {
  params: Promise<{ product_name: string }>
};

export default async function Produto({params}: ProductParam) {
  const { product_name } = await params;

  return (
    <p>/2025/lojinha/{product_name}</p>
  );
}
