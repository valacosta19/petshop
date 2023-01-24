import React from "react";
import { GetStaticProps } from "next";
import fetch from "isomorphic-fetch";
import Image from "next/image";

export const getStaticPaths = async () => {
  const response = await fetch("https://petshop-psi.vercel.app/api/products");
  const { data: productList }: TAPIResponse = await response.json();

  const paths = productList.map(({ id }: TProduct) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    //incremental static generation
    //cualquier pagina que no esté en path da 404
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://petshop-psi.vercel.app/api/${params?.id}`
  );
  const product: TProduct = await response.json();

  return {
    props: {
      product,
    },
  };
};

//Páginas dinámicas
const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    //el id es por el mismo nombre del archivo
    <div>
      <Image
        src={product?.image}
        alt={product?.name}
        width="300"
        height="300"
      />
      <p>{product?.name}</p>
      <p>{product?.price}</p>
    </div>
  );
};

export default ProductItem;
