import { Metadata } from "next";

type ReviewsProps = {
  params: {
    productId: string;
  };
};
export const generateMetadata = ({ params }: ReviewsProps): Metadata => {
  return {
    title: `Reviews of product ${params.productId}`,
  };
};
export default function Reviews({ params }: ReviewsProps) {
  return <h1>All Reviews of product {params.productId}</h1>;
}
