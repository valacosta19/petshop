import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//Páginas dinámicas
const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, [id]);

  return (
    //el id es por el mismo nombre del archivo
    <div>
      <Image
        src={product?.image}
        alt={product?.name}
        width="200"
        height="200"
      />
      <p>{product?.name}</p>
      <p>{product?.price}</p>
    </div>
  );
};

export default ProductItem;
