import React from "react";
import { Text, Group, ActionIcon } from "@mantine/core";
import { Minus, Plus, Trash } from "tabler-icons-react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ item }) => {
 const {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  getItemQuantity,
 } = useShoppingCart();
 return (
  <tr>
   <td>{item?.name || "item name"}</td>
   <td>{item?.price || 0}</td>

   <td>
    <Group spacing={10}>
     <ActionIcon
      variant="transparent"
      onClick={() => {
       decreaseCartQuantity(item.id);
      }}
     >
      <Minus size={16} />
     </ActionIcon>
     <Text>{getItemQuantity(item.id) || 0} </Text>
     <ActionIcon
      variant="transparent"
      onClick={() => {
       increaseCartQuantity(item);
      }}
     >
      <Plus size={16} />
     </ActionIcon>
    </Group>
   </td>
   <td>{item.subtotal || 0}</td>
   <td>
    <Group spacing={10}>
     <ActionIcon
      variant="transparent"
      color="red"
      onClick={() => {
       removeFromCart(item.id);
      }}
     >
      <Trash size={16} />
     </ActionIcon>
    </Group>
   </td>
  </tr>
 );
};

export default CartItem;
