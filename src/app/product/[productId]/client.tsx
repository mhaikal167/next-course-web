"use client";
import { useRouter } from "next/navigation";

type ProductProps = {
  params: {
    productId: string;
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ClientProductDetail({ params }: ProductProps) {
  const router = useRouter();

  const handleClick = async () => {
    alert("Product has been successfuly purchased");
    setTimeout(() => {
      router.replace("/");
    }, 1000);
  };
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error viewing product detail");
  }
  return (
    <div>
      <h1>Details of product {params.productId}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
        onClick={handleClick}
      >
        Order the product
      </button>
    </div>
  );
}
