// "use client"

import React, { useState, useEffect } from "react"
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Section } from "../components/Section/Section";
import AllProductsGrid from "../components/Commerce/ProductGrid";

async function getData(userId: string) {
    noStore();
    const data = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          Subscription: {
            select: {
              status: true || false, // I don't think this is actually really required here, or maybe it is - shop requires membership?
            },
          },
        },
      });

    return data;
};

export default async function StorePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

    return (
        <>
            <Section>
                <AllProductsGrid />
            </Section>
        </>
    )
}