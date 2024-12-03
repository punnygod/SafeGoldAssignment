import ProductDetails from '@/app/components/productDetails';
import { products } from '@/app/components/productList';

type ProductPageProps = {
  params: {
    id: number;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = products.filter((a) => a.id == id)[0];
  const { image, title, faqs, reviews, description, mintingCharges, rating } =
    product;
  return (
    <ProductDetails
      {...{
        image,
        title,
        faqs,
        reviews,
        mintingCharges,
        description,
        rating,
      }}
    />
  );
}
