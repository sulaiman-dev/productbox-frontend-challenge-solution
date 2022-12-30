import { Card, Image, Text, Group, createStyles, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
 card: {
  backgroundColor:
   theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
 },

 imageSection: {
  padding: theme.spacing.md,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: `1px solid ${
   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
  }`,
 },

 label: {
  marginBottom: theme.spacing.xs,
  lineHeight: 1,
  fontWeight: 700,
  fontSize: theme.fontSizes.xs,
  letterSpacing: -0.25,
  textTransform: "uppercase",
 },

 section: {
  padding: theme.spacing.md,
  borderTop: `1px solid ${
   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
  }`,
 },

 icon: {
  marginRight: 5,
  color:
   theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5],
 },
}));

export default function ProductCard({ product }) {
 const { name, img, price } = product;
 let imageSrc = process.env.REACT_APP_APIS_BASE_URL + img?.slice(1);
 const { classes } = useStyles();

 return (
  <Card withBorder radius="md" className={classes.card}>
   <Card.Section className={classes.imageSection}>
    <Image src={imageSrc} alt="Tesla Model S" />
   </Card.Section>

   <Group position="apart" mt="md">
    <div>
     <Text weight={500}>{name}</Text>
    </div>
   </Group>
   <Card.Section className={classes.section}>
    <Group spacing={30}>
     <div>
      <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
       {price}$
      </Text>
     </div>

     <Button
      radius="xl"
      style={{ flex: 1 }}
      size="xs"
      onClick={() => console.log(product)}
     >
      Add To Cart
     </Button>
    </Group>
   </Card.Section>
  </Card>
 );
}
