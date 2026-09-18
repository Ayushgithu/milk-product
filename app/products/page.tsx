import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Gold Full Cream, Double Toned, and Chai Special milk from Ganga Amrit - pasteurized in Chhatarpur, Madhya Pradesh. See Fat%, SNF%, and available pack sizes.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
