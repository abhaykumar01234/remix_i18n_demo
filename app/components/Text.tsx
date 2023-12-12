import { Link } from "@remix-run/react";
import { Stack, styled, Button, Text } from "~/components/vendorUI";

const HALF_PAGE_WIDTH = 600;
export const pageSidePadding = `max(calc(50vw - ${HALF_PAGE_WIDTH}px), $2)`;

interface ChildProps {
  children: React.ReactNode;
}

export const PageWrapper = styled(Stack, {
  flexGrow: 1,
  padding: `$4 ${pageSidePadding} $5`,
});

export const Title = ({ children, ...restProps }: ChildProps) => (
  <Text size={6} weight="bold" color="brand" asChild>
    <h1 {...restProps}>{children}</h1>
  </Text>
);

export const Heading = ({ children, ...restProps }: ChildProps) => (
  <Text size={5} weight="semibold" color="brand" asChild>
    <h2 {...restProps}>{children}</h2>
  </Text>
);

interface SubHeadingProps extends ChildProps {
  color?:
    | "main"
    | "brand"
    | "secondary"
    | "inverted"
    | "error"
    | "currentColor";
}

export const SubHeading = ({
  children,
  color = "brand",
  ...restProps
}: SubHeadingProps) => (
  <Text size={4} weight="medium" color={color} asChild>
    <h3 {...restProps}>{children}</h3>
  </Text>
);

export const Para = ({ children, ...restProps }: ChildProps) => (
  <Text size={3} asChild>
    <p {...restProps}>{children}</p>
  </Text>
);

const ListComponent = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  listStyle: "none",
});

export const OrderedList = styled("ol", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  listStyleType: "decimal",
});

export const ListItem = styled("li", {
  textSize: "$3",
  paddingLeft: "16px",
  position: "relative",
  display: "list-item",

  ".bullet": {
    content: " ",
    position: "absolute",
    top: "3px",
    left: 0,
    width: "6px",
    height: "6px",
    background: "$brandBlue",
  },

  a: {
    color: "$actionBlue",
    textDecoration: "underline",
  },
});

const ListItemComponent = ({ children, ...restProps }: ChildProps) => (
  <ListItem {...restProps}>
    <div className="bullet" />
    {children}
  </ListItem>
);

export const List: typeof ListComponent & { Item?: typeof ListItemComponent } =
  ListComponent;

List.Item = ListItemComponent;

export const Label = ({ children, ...restProps }: ChildProps) => (
  <Text size={3} color="brand" weight="medium" asChild>
    <label {...restProps}>{children}</label>
  </Text>
);

export const Anchor = styled("a", {
  color: "$actionBlue",
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "$3",
  border: "none",
  outline: "none",
  background: "transparent",

  "&[disabled]": {
    color: "$steel",
  },
});

export const SideBox = styled(Stack, {
  background: "#f4f4f4",
  padding: "$3",
});

export const ButtonLink = styled(Button, {
  position: "relative",
  a: {
    position: "absolute",
    inset: 0,
    lineHeight: "32px",
  },
});

export const GdmLink = styled(Link, {
  color: "$actionBlue",
  textDecoration: "underline",
});
