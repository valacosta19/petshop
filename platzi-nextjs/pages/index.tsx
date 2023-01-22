import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

//Pagina básica. Index siempre va a ser Home
const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("api/products")
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <h1>My Pet Shop</h1>
      <div>
        {productList.map((product) => {
          return (
            <Link href={`/product/${product.id}`}>
              <div key={product.id}>
                <Image
                  src={product?.image}
                  alt={product?.name}
                  width="200"
                  height="200"
                />
                <h2>{product?.name}</h2>
                <p>{product?.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
