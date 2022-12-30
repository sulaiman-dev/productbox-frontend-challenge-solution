import { Box, Button, TextInput, Container, Text } from "@mantine/core";
import React from "react";
import useAxios from "../hooks/useAxios";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

const CreateItem = () => {
 const navigate = useNavigate();
 const { response, execute } = useAxios(undefined, false);
 const form = useForm({
  initialValues: {
   name: "",
   price: "",
   img: "",
  },
 });
 const handleSubmit = async (e) => {
  e.preventDefault();
  let data = form.values;
  execute({
   method: "POST",
   url: "/items",
   headers: {
    accept: "*/*",
   },
   data: data,
  });
  form.reset();
  navigate("/");
 };

 return (
  <Container>
   <Text fw={500} fz="xl" my={10} color="#228be6">
    Create New Item
   </Text>
   <Box sx={{ maxWidth: 400 }}>
    <form onSubmit={(e) => handleSubmit(e)}>
     <TextInput
      label="Name:"
      placeholder="Name"
      {...form.getInputProps("name")}
     />
     <TextInput
      type="number"
      label="Price:"
      placeholder="Price"
      mt="md"
      {...form.getInputProps("price")}
     />
     <TextInput
      label="Image Url:"
      placeholder="Image Url"
      mt="md"
      {...form.getInputProps("img")}
     />
     <Button type="submit" mt="md">
      Submit
     </Button>
    </form>
   </Box>
  </Container>
 );
};

export default CreateItem;
