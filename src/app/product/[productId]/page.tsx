import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProductProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: ProductProps) {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return <h1>Details of product {params.productId}</h1>;
}
