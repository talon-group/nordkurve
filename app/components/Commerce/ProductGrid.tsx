"use client"

import React, { useEffect, useState } from "react";
import { createClient } from "@/app/lib/supabase/client";
// import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const products = [
    {
      id: 1,
      name: 'Home Kit 23/24',
      href: '#',
      price: '$69',
      imageSrc: 'https://b04-ep-media-prod.azureedge.net/pickerimages-shop/2002164_Heimtrikot-Castore-2324_Front_23-06_528911_M.jpg',
    },
    {
      id: 2,
      name: 'GK Kit 23/24',
      href: '#',
      price: '$69',
      imageSrc: 'https://b04-ep-media-prod.azureedge.net/pickerimages-shop/2002167-NEU_TW_Castore_2324_Front_529923_M.jpg',
    },
    {
      id: 3,
      name: 'Away Kit 23/24',
      href: '#',
      price: '$69',
      imageSrc: 'https://b04-ep-media-prod.azureedge.net/pickerimages-shop/2002165_Auswaertstrikot-Castore-2324_Front_23-07_531349_M.jpg',
    },
    {
      id: 4,
      name: 'GK Away Kit 23/24',
      href: '#',
      price: '$69',
      imageSrc: 'https://b04-ep-media-prod.azureedge.net/pickerimages-shop/2002168_Auswaertstrikot-Torwart-Castore-2324_unbeflockt_Front_23-04_535275_M.jpg',
    },
];

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
        console.log(data);
        setStoreItems(data);
      };

      if (error) {
        throw error;
        return;
      };
    } catch (error: any) {
      console.error('Hello' + error.message);
    };
  };

  useEffect(() => {
    fetchShopItems();
  }, [supabase])

  return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {storeItems.map((product) => (
              <a key={product.id} href={product.name} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageUrl || ''}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
  );
}