import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = ({ productList }: { productList: TProduct[] }) => {
  return (
    <div>
      {productList.map(({ id, image, name, price }) => {
        return (
          <Link key={id} href={`/product/${id}`}>
            <div>
              <Image src={image} alt={name} width="333" height="333" />
              <h2>{name}</h2>
              <p>{price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
