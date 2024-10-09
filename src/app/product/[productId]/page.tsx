import { notFound } from "next/navigation";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return <h1>Details of product {params.productId}</h1>;
}
