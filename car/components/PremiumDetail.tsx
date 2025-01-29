"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Shield, Star } from "lucide-react"

const PremiumDetail = () => {
  const features = [
    {
      icon: Crown,
      title: "Luxury Treatment",
      description: "Every detail perfected with premium products and techniques",
    },
    {
      icon: Shield,
      title: "Ultimate Protection",
      description: "Advanced ceramic coating and paint protection solutions",
    },
    { icon: Star, title: "Concierge Service", description: "Personalized attention and premium customer care" },
  ]

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden relative">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8">Premium Detail Experience</h2>
          <p className="text-xl mb-12 text-gray-200">
            Elevate your vehicle to extraordinary heights with our premium detailing service. We combine cutting-edge
            technology with artisanal craftsmanship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mx-auto mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700"
          >
            Experience Premium Detail
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default PremiumDetail

