import React from "react";
import { Container, Text, Table, Group, Button } from "@mantine/core";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
 const { cartItems, cartTotal } = useShoppingCart();
 const navigate = useNavigate();

 return (
  <Container>
   <Text fw={500} fz="xl" my={15} color="#228be6">
    Cart Items
   </Text>
   {cartItems.length ? (
    <>
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
     <Group position="right" my={15}>
      <Text>Cart Total: {cartTotal}</Text>
     </Group>
    </>
   ) : (
    <Group>
     <Text>Cart is Empty Now</Text>
     <Button onClick={() => navigate("/")}>Add Items</Button>
    </Group>
   )}
  </Container>
 );
};

export default ShoppingCart;
