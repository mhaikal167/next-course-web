import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Product List",
  },
};
export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <Link href={"product/1"}>
        <h2>product 1</h2>
      </Link>
      <Link href={"product/2"}>
        <h2>product 2</h2>
      </Link>
      <Link href={"product/3"}>
        <h2>product 3</h2>
      </Link>
      <Link href={"product/4"}>
        <h2>product 4</h2>
      </Link>
    </>
  );
}
