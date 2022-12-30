import React from "react";
import useAxios from "../hooks/useAxios";
import ProductCard from "../components/ProductCard";
import { Container, SimpleGrid } from "@mantine/core";

const ProductsList = () => {
 const { response, error, loading } = useAxios({
  method: "GET",
  url: "/items",
  headers: {
   accept: "*/*",
  },
 });

 return (
  <div>
   {loading ? (
    <div>Loading...</div>
   ) : (
    <div>
     {/* {error && error.message} */}
     <Container py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
       {response &&
        response.map((product) => {
         return <ProductCard product={product} key={product.id} />;
        })}
      </SimpleGrid>
     </Container>
    </div>
   )}
  </div>
 );
};

export default ProductsList;
