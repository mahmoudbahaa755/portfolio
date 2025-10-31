"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 px-4 md:px-0"
    >
      <h1 className="text-2xl md:text-3xl font-bold">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="flex flex-col items-center p-6 sm:p-8 card-hover transition-all">
          <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-4" />
          <CardTitle className="text-lg sm:text-xl mb-2">Email</CardTitle>
          <CardDescription className="text-center text-sm">
            Drop me a line anytime!
          </CardDescription>
          <CardContent className="mt-4 px-0">
            <a
              href="mailto:mahmoudbahaa755@gmail.com"
              className="text-blue-500 hover:underline text-sm sm:text-base break-all"
            >
              mahmoudbahaa755@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center p-6 sm:p-8 card-hover transition-all">
          <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mb-4" />
          <CardTitle className="text-lg sm:text-xl mb-2">Phone</CardTitle>
          <CardDescription className="text-center text-sm">
            Feel free to call or text
          </CardDescription>
          <CardContent className="mt-4 px-0">
            <a
              href="tel:+201010623847"
              className="text-green-500 hover:underline text-sm sm:text-base"
            >
              +201010623847
            </a>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
