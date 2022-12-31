import React from "react";
import { Text, Group, ActionIcon, Avatar } from "@mantine/core";
import { Minus, Plus, Trash } from "tabler-icons-react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ item }) => {
 const { name, img, price, subTotal } = item;
 let imageSrc = process.env.REACT_APP_APIS_BASE_URL + img?.slice(1);
 const {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  getItemQuantity,
 } = useShoppingCart();
 return (
  <tr>
   <td>
    <Group spacing="sm">
     <Avatar size={46} src={imageSrc} radius={5} />
     <Text size="sm" weight={500}>
      {name || "item Name"}
     </Text>
    </Group>
   </td>
   <td>{price || 0}</td>

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
   <td>{subTotal || 0}</td>
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
