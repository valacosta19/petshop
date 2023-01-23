import Link from "next/link";
import React from "react";
import fetch from "isomorphic-fetch";
import Image from "next/image";

export const getStaticProps = async (params) => {
  const response = await fetch("https://petshop-psi.vercel.app/api/products");
  //cambiamos el nombre de data a productList
  const { data: productList }: TAPIResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

//Pagina básica. Index siempre va a ser Home
const Home = ({ productList }: { productList: TProduct[] }) => {
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
