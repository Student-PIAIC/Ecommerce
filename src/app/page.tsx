import GridLayout from "@/components/grid-layout";
import Brandlogo from "@/components/layout/brand-logo";
import ProductCards from "@/components/products-card";
import React from "react"

export default function Home(){
  return(
    <main>
      
      <GridLayout />
      <Brandlogo />
      <ProductCards />
    </main>
  )
}
