import { ProductParam } from "../page";

export default async function EditarProduto({params}: ProductParam) {
  const { product_name } = await params;

  return (
    <p>/2025/lojinha/{product_name}/editar</p>
  );
}
