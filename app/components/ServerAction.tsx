import addProductToDatabse from '@/actions/serverActions';
import { Product } from '@/typings';
import AddProductButton from './AddProductButton';
// import { useTransition } from 'react';

const ServerAction = async () => {
  //   const [isPending, startTransition] = useTransition();
  const res = await fetch(
    'https://64a6aadb096b3f0fcc803cd2.mockapi.io/products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    }
  );
  const products: Product[] = await res.json();

  return (
    <main className="">
      <h1 className="text-center font-bold text-3xl">Product Warehouse</h1>
      <AddProductButton />
      <form
        action={addProductToDatabse}
        className="flex flex-col gap-5 p-5 max-w-xl mx-auto"
      >
        <input
          name="product"
          placeholder="Enter product name..."
          className="p-2 border border-gray-300 rounded-md outline-none"
        />
        <input
          name="price"
          placeholder="Enter product price..."
          className="p-2 border border-gray-300 rounded-md outline-none"
        />
        {/* <input
          type="image"
          formAction={''}
          className="p-2 border border-gray-300 rounded-md outline-none"
        /> */}
        <button className="border bg-blue-500 text-white rounded-md p-2">
          Add Product
        </button>
      </form>
      <h2 className="font-bold flex-wrap gap-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div
            className="p-5 shadow hover:bg-slate-100 transition"
            key={product.id}
          >
            <p>{product.product}</p>
            <p>$ {product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServerAction;
