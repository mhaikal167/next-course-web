import { notFound } from "next/navigation";

export default function ReviewsDetail({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
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
