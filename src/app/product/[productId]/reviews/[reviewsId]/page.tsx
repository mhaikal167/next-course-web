import { Metadata } from "next";
import { notFound } from "next/navigation";

type ReviewsDetailProps = {
  params: {
    productId: string;
    reviewsId: string;
  };
};

export const generateMetadata = ({ params }: ReviewsDetailProps): Metadata => {
  return {
    title: `Reviews ${params.reviewsId} product ${params.productId}`,
  };
};
export default function ReviewsDetail({ params }: ReviewsDetailProps) {
  const { productId, reviewsId } = params;
  if (parseInt(productId) > 1000 || parseInt(reviewsId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Reviews {reviewsId} of product {productId}
    </h1>
  );
}
