import React from "react";
import fetch from "isomorphic-fetch";
import ProductList from "@components/ProductList";

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
      <ProductList productList={productList} />
    </div>
  );
};

export default Home;
