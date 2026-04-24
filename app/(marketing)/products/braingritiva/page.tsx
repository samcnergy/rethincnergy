import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/sections/product-detail";
import { productBySlug } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

const SLUG = "braingritiva" as const;
const product = productBySlug(SLUG);

export const metadata = buildMetadata({
  title: product ? `${product.name} — ${product.category}` : "Product",
  description: product?.description ?? "",
  path: `/products/${SLUG}`,
});

export default function Page() {
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
