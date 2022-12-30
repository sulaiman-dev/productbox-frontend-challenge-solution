import { Box, Button, TextInput } from "@mantine/core";
import React from "react";
import useAxios from "../hooks/useAxios";
import { useForm } from "@mantine/form";

const CreateItem = () => {
 const { loading, error, response, execute } = useAxios(undefined, false);
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
 };

 return (
  <Box sx={{ maxWidth: 400 }} mx="auto">
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
 );
};

export default CreateItem;
