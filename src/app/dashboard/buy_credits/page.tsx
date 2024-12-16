"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from '@/components/ui/button';

export default function page() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const plans = [
    {
      id: 1,
      credits: 4,
      price: 0.99,
      description: "Perfect for trying out our service",
      pricePerCredit: "0.25¢ per credit"
    },
    {
      id: 2,
      credits: 8,
      price: 1.00,
      description: "Most popular for regular users",
      pricePerCredit: "0.13¢ per credit"
    },
    {
      id: 3,
      credits: 12,
      price: 2.00,
      description: "Best value for power users",
      pricePerCredit: "0.17¢ per credit"
    }
  ]

  const handleSelectPlan = (planId: number) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4">
            Purchase Credits
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of timeless elegance and cutting-edge AI technology with our flexible credit packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative transition-all duration-300 hover:shadow-lg cursor-pointer ${
                selectedPlan === plan.id ? 'ring-2 ring-[#D4A373]' : ''
              }`}
              onClick={() => handleSelectPlan(plan.id)}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{plan.credits} Credits</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-serif mb-2">
                  ${plan.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.pricePerCredit}
                </p>
              </CardContent>
               
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-[#D4A373] hover:bg-[#C49363] text-white px-8 py-3 text-lg"
            disabled={selectedPlan === null}
          >
            Proceed to Checkout
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>All purchases are secure and encrypted. Credits never expire.</p>
        </div>
      </div>
    </div>
  )
}
