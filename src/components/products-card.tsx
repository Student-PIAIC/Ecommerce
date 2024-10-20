import { client } from "@/sanity/lib/client";
import {Image} from "sanity"
import SingleProductCard from "./Single-product-card";
import React, {cache} from "react"
export interface Product {
    _id: string; 
    productName: string; 
    price: number;
    title:string;
    image:{asset:{_ref:string}}
  }
const ProductCards = async()=>{
    let pData: Product[] = await client.fetch(
       ` *[_type=="product"]{
       _id,
  price,
    title,
    image {asset},
    category -> {title},
    }`,{
      revalidate: 50
    }
  )
    return(
 <div>
    <h3 className ="flex justify-center items-center h-16 text-4xl border-l-slate-200 bg-pink-300 border-b">Products</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto w-auto bg-yellow-100 gap-10 py-10 px-10 justify-between">
    {pData.map((propData)=>{
        return(
            <div key={propData._id}>
<SingleProductCard product={propData} />

            </div>
        ) }
    )}
</div>
</div> 
    )
}
export default ProductCards