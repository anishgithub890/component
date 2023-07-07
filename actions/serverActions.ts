'use server';
import { Product } from '@/typings';
import { revalidateTag } from 'next/cache';

const addProductToDatabse = async (e: FormData) => {
  const product = e.get('product')?.toString();
  const price = e.get('price')?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,

    // OR
    //   product: product,
    //   price: price,
  };

  await fetch('https://64a6aadb096b3f0fcc803cd2.mockapi.io/products', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidateTag('products');
};

export default addProductToDatabse;
