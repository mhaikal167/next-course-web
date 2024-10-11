import { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientProductDetail from "./client";

type ProductProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    resolve(`Iphone ${params.productId}`);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: ProductProps) {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }

  return (
    <div className="px-4 py-4">
      <ClientProductDetail params={params} />
    </div>
  );
}
