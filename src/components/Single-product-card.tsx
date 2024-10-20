import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Adjust the import path if needed
import { Product } from "./products-card";
interface IProps{
  product:Product
}

const SingleProductCard = ({ product }: IProps) => {  
  return (  
      <div>  
          <Image
          width={300}
          height={300}
              className="max-h-[300px] min-h-[300px]"
             src={urlFor(product.image.asset._ref).url()} alt={product.productName} />  
          <h3>{product.title}</h3>  
          <h3>${product.price}</h3>  
          <button className="bg-blue-400 border py-2 px-6 rounded text-white">Add to Cart</button>
      </div>  
  );   
};  

export default SingleProductCard;   





// interface IProps {
//   product: Product;
// }

// export const SingleProductCard = ({ product }: IProps) => {
//   // Get the image URL, fallback to an empty string if undefined
//   const imageUrl = product.productImage ? urlFor(product.productImage).url() : '';

//   return (
//     <div>
//       {/* Render the Image component only if imageUrl exists */}
//       {imageUrl ? (
//         <Image
//           width={322}
//           height={450}
//           src={imageUrl}
//           alt={product.productName}
//         />
//       ) : (
//         <p>No image available</p> // Optional fallback if no image exists
//       )}
//       <h3>{product.productName}</h3>
//     </div>
//   );
// };
