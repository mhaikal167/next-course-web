import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Product List",
  },
};
export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <h2>product 1</h2>
      <h2>product 2</h2>
      <h2>product 3</h2>
      <h2>product 4</h2>
      <h2>product 5</h2>
    </>
  );
}
