'use client';

import addProductToDatabse from '@/actions/serverActions';
import { useTransition } from 'react';

const AddProductButton = () => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append('product', 'MacBook Pro');
  formData.append('price', '1500');
  return (
    <button
      onClick={() => startTransition(() => addProductToDatabse(formData))}
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
    >
      {isPending ? 'Adding...' : 'Add Mackbook Pro'}
    </button>
  );
};

export default AddProductButton;
