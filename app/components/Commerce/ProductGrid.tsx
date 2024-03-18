"use client"

import React, { useEffect, useState } from "react";
import { createClient } from "@/app/lib/supabase/client";

type Product = {
  id: number;
  name: string;
  itemDescription: string | null;
  imageUrl: string | null;
  price: number;
  quantity: number | null;
  created_at: string;
};

export default function AllProductsGrid() {
  const supabase = createClient();
  const [storeItems, setStoreItems] = useState<Product[]>([]);

  const fetchShopItems = async () => {
    try {
      const { data, error } = await supabase
        .from("storeItems")
        .select("*")

      if (data) {
        setStoreItems(data);
      };

      if (error) {
        throw error;
        return;
      };
    } catch (error: any) {
      console.error(error.message);
    };
  };

  useEffect(() => {
    fetchShopItems();
  }, [supabase])

  return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest arrivals</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Fan items, wearables and homeware
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {storeItems.map((product) => (
              <a key={product.id} href={product.name} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageUrl || ''}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">€{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
  );
}