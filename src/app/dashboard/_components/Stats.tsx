import { Card } from "@/components/ui/card";
import { Calendar, Layout, Heart } from "lucide-react";
function Stats() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {[
      { icon: Layout, label: "Total Projects", value: "4" },
      { icon: Calendar, label: "Consultations", value: "8" },
      { icon: Heart, label: "Coins Left", value: "12" },
    ].map((stat, index) => (
      <Card key={index} className="p-6">
        <stat.icon className="w-8 h-8 mb-4 text-primary" />
        <div className="text-2xl font-light">{stat.value}</div>
        <div className="text-muted-foreground">{stat.label}</div>
      </Card>
    ))}
  </div>
  )
}

export default Stats