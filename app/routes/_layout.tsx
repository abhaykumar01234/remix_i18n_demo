import { Outlet } from "@remix-run/react";
import { pageSidePadding } from "~/components/Text";
import { Stack, Inline, styled, globalStyles } from "~/components/vendorUI";

globalStyles();

const AppWrapper = styled(Stack, {
  minHeight: "100vh",
});

const Navigation = styled(Inline, {
  padding: `$4 ${pageSidePadding} 35px`,
  position: "relative",
  background: "$brandBlue",
  flexWrap: "wrap",
});

const BreadcrumbWrapper = styled(Inline, {
  paddingInline: pageSidePadding,
  borderBottom: "1px solid $grey",
});

const PageWrapper = styled("main", {
  flexGrow: 1,
  padding: `$4 ${pageSidePadding} $5`,
});

const FooterWrapper = styled(Stack, {
  padding: `$4 ${pageSidePadding}`,
  background: "#f4f4f4",
});

// const InlineWrap = styled(Inline, { flexWrap: "wrap" });

export default function Index() {
  return (
    <AppWrapper gap={0}>
      <Navigation>x</Navigation>
      <BreadcrumbWrapper distribute="between" align="center">
        breadcrumb
      </BreadcrumbWrapper>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <FooterWrapper gap={3}>y</FooterWrapper>
    </AppWrapper>
  );
}
