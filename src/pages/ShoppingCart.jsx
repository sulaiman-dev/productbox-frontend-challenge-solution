import { Container, Text, Table } from "@mantine/core";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";

const ShoppingCart = () => {
 const { cartItems } = useShoppingCart();
 return (
  <Container>
   <Text fw={500} fz="xl" my={15} color="#228be6">
    Cart Items
   </Text>
   <Table verticalSpacing="sm" horizontalSpacing={"xl"} striped>
    <thead style={{ background: "rgb(231 245 255)" }}>
     <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th></th>
     </tr>
    </thead>
    <tbody>
     {cartItems?.map((item) => {
      return <CartItem item={item} key={item.id} />;
     })}
    </tbody>
   </Table>
  </Container>
 );
};

export default ShoppingCart;
