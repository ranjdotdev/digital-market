"use client";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
      </SheetTrigger>
    </Sheet>
  );
}
