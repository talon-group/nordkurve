"use client"

import React from "react";
import { Button } from "@/UI/button";
import Link from "next/link";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Card } from "@/components/ui/card";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import UserSubscriptionList from "@/app/components/Admin/ActiveSubscriptions";

async function getData(userId: string) {
    noStore();
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            Subscription: {
                select: {
                    status: true,
                },
            },
        },
    });

    console.log(data);
    return data;
};

export default async function AdminDashboardPage() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await getData(user?.id as string);

    return (
        <div className="grid items-start gap-y-8">
            <div className="flex items-center justify-between px-2">
                <div className="grid gap-1">
                    <h1 className="text-3xl md:text-4xl">Administration</h1>
                    <p className="text-lg text-muted-foreground">Maintain all users here</p>
                </div>
                {/* {data?.Subscription?.status === "active" ? (
                    <Link href="/dashboard/">Test</Link>
                ) : (
                    <p>You are currently not subscribed</p>
                )} */}
                <UserSubscriptionList />
            </div>
        </div>
    );
};