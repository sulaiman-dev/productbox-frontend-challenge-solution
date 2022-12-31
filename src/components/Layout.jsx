import { useState } from "react";
import {
 createStyles,
 Header,
 Container,
 Group,
 Burger,
 Paper,
 Transition,
 Text,
 ActionIcon,
 Badge,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart } from "tabler-icons-react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
 root: {
  position: "relative",
  zIndex: 1,
 },

 dropdown: {
  position: "absolute",
  top: HEADER_HEIGHT,
  left: 0,
  right: 0,
  zIndex: 0,
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderTopWidth: 0,
  overflow: "hidden",

  [theme.fn.largerThan("sm")]: {
   display: "none",
  },
 },

 header: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
 },

 links: {
  [theme.fn.smallerThan("sm")]: {
   display: "none",
  },
 },

 burger: {
  [theme.fn.largerThan("sm")]: {
   display: "none",
  },
 },

 link: {
  display: "block",
  lineHeight: 1,
  padding: "8px 12px",
  borderRadius: theme.radius.sm,
  textDecoration: "none",
  color:
   theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
  fontSize: theme.fontSizes.sm,
  fontWeight: 500,

  "&:hover": {
   backgroundColor:
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  [theme.fn.smallerThan("sm")]: {
   borderRadius: 0,
   padding: theme.spacing.md,
  },
 },

 linkActive: {
  "&, &:hover": {
   backgroundColor: theme.fn.variant({
    variant: "light",
    color: theme.primaryColor,
   }).background,
   color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
    .color,
  },
 },
}));

const links = [
 { link: "/", label: "Products" },
 { link: "/create-item", label: "Create Item" },
 //  { link: "/shopping-cart", label: "Shopping Cart" },
];

export default function Layout() {
 const [opened, { toggle, close }] = useDisclosure(false);
 const { classes, cx } = useStyles();
 const navigate = useNavigate();
 const params = useLocation();
 let activeLinkIndex = links.findIndex((link) => link.link === params.pathname);
 const [active, setActive] = useState(links[activeLinkIndex]?.link);
 const { cartQuantity } = useShoppingCart();

 const navigateHandler = (event, link) => {
  event.preventDefault();
  setActive(link);
  close();
  navigate(link);
 };

 const items = links.map((link) => (
  <a
   key={link.label}
   href={link.link}
   className={cx(classes.link, { [classes.linkActive]: active === link.link })}
   onClick={(event) => {
    navigateHandler(event, link.link);
   }}
  >
   {link.label}
  </a>
 ));

 return (
  <>
   <Header height={HEADER_HEIGHT} className={classes.root}>
    <Container className={classes.header}>
     <Text
      size={"xl"}
      onClick={(event) => {
       navigateHandler(event, "/");
      }}
     >
      RandoStore
     </Text>
     <Group spacing={5} className={classes.links}>
      {items}
     </Group>
     <Group>
      <Badge
       sx={{ paddingLeft: 0 }}
       size="lg"
       radius="lg"
       color="teal"
       variant="transparent"
       leftSection={
        <ActionIcon
         size="md"
         color="blue"
         radius="lg"
         variant="transparent"
         onClick={(event) => {
          navigateHandler(event, "/shopping-cart");
         }}
        >
         <ShoppingCart size={40} />
        </ActionIcon>
       }
      >
       {cartQuantity}
      </Badge>
     </Group>
     <Burger
      opened={opened}
      onClick={toggle}
      className={classes.burger}
      size="sm"
     />
     <Transition transition="pop-top-right" duration={200} mounted={opened}>
      {(styles) => (
       <Paper className={classes.dropdown} withBorder style={styles}>
        {items}
       </Paper>
      )}
     </Transition>
    </Container>
   </Header>
   <Container>
    <Outlet />
   </Container>
  </>
 );
}
