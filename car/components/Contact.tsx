"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <div className="h-screen flex items-center bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:shadow-xl hover:shadow-gray-700/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                  Ready to transform your vehicle? Contact us today for a consultation or to schedule your appointment.
                  We're here to turn your automotive dreams into reality.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      text: "+91 9518183293",
                      label: "Call Us",
                      href: "tel:+919518183293",
                    },
                    {
                      icon: MapPin,
                      text: "Chandpur Ki Dhani, Dhaliawas, Rewari, Haryana 123401",
                      label: "Visit Us",
                      href: "https://maps.google.com/?q=Chandpur+Ki+Dhani,+Dhaliawas,+Rewari,+Haryana+123401",
                    },
                  ].map((item, index) => (
                    <motion.a
                      href={item.href}
                      key={index}
                      className="flex items-center p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-400">{item.label}</p>
                        <span className="font-sans text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                          {item.text}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:shadow-xl hover:shadow-gray-700/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.0607783196333!2d76.6077622761255!3d28.17506700470642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d51256d5e31df%3A0xebb2387bc4cbf15f!2sPRO%20MODS%20CAR%20CUSTOM!5e0!3m2!1sen!2sin!4v1737179279984!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg hover:shadow-lg transition-shadow duration-300"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

