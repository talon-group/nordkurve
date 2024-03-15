"use client"

import React, { useEffect, useState } from "react";
import { createClient } from "@/app/lib/supabase/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { Section } from "@/app/components/Section/Section";
import { useRouter } from "next/router";

async function getData({ userId, noteId }: { userId: string; noteId: string }) {
    noStore();
    const data = await prisma.note.findUnique({
      where: {
        id: noteId,
        userId: userId,
      },
      select: {
        title: true,
        description: true,
        id: true,
      },
    });
  
    return data;
};

type Product = {
    id: number;
    name: string;
    itemDescription: string | null;
    imageUrl: string | null;
    price: number;
    quantity: number | null;
    created_at: string;
};

export default function DynamicShopItemRoute({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();
    const supabase = createClient();
    const { id: itemId } = router.query;
    const { getUser } = getKindeServerSession();

    const [itemData, setItemData] = useState<Product | undefined>(undefined);

    useEffect(() => {
        const fetchItemData = async () => {
            try {
                const { data, error } = await supabase
                    .from("storeItems")
                    .select("*")
                    .eq("id", itemId)
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

        if (itemId) {
            fetchItemData();
        }
    }, [supabase, itemId]);

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