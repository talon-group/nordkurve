"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/app/lib/supabase/client";
import { Section } from "@/app/components/Section/Section";

type Product = {
    id: number;
    name: string;
    itemDescription: string | null;
    imageUrl: string | null;
    price: number;
    quantity: number | null;
    created_at: string;
};

export default function DynamicShopItemRoute({ params }: { params: { id: string } }) {
    const supabase = createClient();
    const [itemData, setItemData] = useState<Product | undefined>(undefined);

    useEffect(() => {
        const fetchItemData = async () => {
            try {
                const { data, error } = await supabase
                    .from("storeItems")
                    .select("*")
                    .eq("id", params.id)
                    .single();
                if (error) {
                    console.error("Error fetching item data:", error);
                    return;
                }

                setItemData(data);
            } catch (error: any) {
                console.error("Error fetching item data:", error);
            }
        };

        if (params.id) {
            fetchItemData();
        }
    }, [supabase, params.id]);

    return (
        <>
            <Section>
                <div className="mt-3 text-center text-5xl font-bold tracking-tight text-red-500">Title</div>
                {itemData && (
                    <>
                        <h2>{itemData.name}</h2>
                        <p>{itemData.itemDescription}</p>
                        <img src={itemData.imageUrl || ''} alt={itemData.name} />
                        <p>Price: {itemData.price}</p>
                    </>
                )}
            </Section>
        </>
    );
};
