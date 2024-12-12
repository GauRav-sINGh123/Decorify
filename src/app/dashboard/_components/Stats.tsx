"use client";
import { Card } from "@/components/ui/card";
import { useUserStore } from "@/store/useUserStore";
import {  Layout, Heart } from "lucide-react";
function Stats() {
  const { user } = useUserStore();

  if (user?.credits === undefined) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="flex flex-row gap-2">
          <div className="animate-pulse bg-gray-300 w-14 h-14 rounded-lg" />
          <div className="flex flex-col gap-2">
            <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-lg" />
            <div className="animate-pulse bg-gray-300 w-36 h-3 rounded-lg" />
            <div className="animate-pulse bg-gray-300 w-36 h-2 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {[
        { icon: Layout, label: "Total Projects", value: "4" },
        {
          icon: Heart,
          label: user.credits === 1 ? "Coin Left" : "Coins Left",
          value: `${user?.credits}`,
        },
      ].map((stat, index) => (
        <Card key={index} className="p-6">
          <stat.icon className="w-8 h-8 mb-4 text-primary" />
          <div className="text-2xl font-light ml-2">{stat.value}</div>
          <div className="text-muted-foreground ml-2">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
}

export default Stats;
