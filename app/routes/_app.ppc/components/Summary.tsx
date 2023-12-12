import { Link, useLoaderData } from "@remix-run/react";
import { SubHeading, pageSidePadding } from "~/components/Text";
import {
  styled,
  Text,
  Columns,
  Inline,
  Icon,
  ButtonLink,
} from "~/components/vendorUI";
import { path } from "~/path";
import { useTranslation } from "react-i18next";
import { type loader } from "../route";

export const FullWidthInline = styled("div", {
  marginInline: `calc(${pageSidePadding} * -1)`,
  padding: `calc($3 + $1) ${pageSidePadding}`,
});

const Wrapper = styled(FullWidthInline, {
  background: "$brandBlue",
  color: "$white",
});

export const StatValue = styled(Text, {
  color: "#06c4b0",
  fontSize: "36px !important",
  fontVariant: "tabular-nums",
});

export const EditIcon = styled(Icon, { cursor: "pointer" });

const Stat4Columns = styled(Columns, {
  rowGap: "$3 !important",
  variants: {
    error: {
      true: {
        rowGap: "$4 !important",
      },
    },
  },
});

export const Summary = () => {
  const { t } = useTranslation();
  const data = useLoaderData<typeof loader>();
  const isError = false;
  const isCTInstalled = Boolean(data.conversions);
  const isDisabled = !true;

  return (
    <Stat4Columns columns={4} error={isError} asChild>
      <Wrapper>
        <SubHeading color="inverted">
          {t("CLICK_TITLE", { count: 2 })}
        </SubHeading>
        <SubHeading color="inverted">
          {t("CONVERSION_TITLE", { count: 2 })}
        </SubHeading>
        <SubHeading color="inverted">
          {t("PPC_MANAGE-BIDS_HEADER-SPEND_HEADING")}
        </SubHeading>
        <SubHeading color="inverted">
          {t("ACCOUNT-SETTINGS_PPC-FORM_BUDGET_LABEL")}
        </SubHeading>

        {isError ? (
          <Columns.Column span={4}>
            <Inline gap={1} align="center">
              <Icon name="Warning" size={24} color="red" />
              <SubHeading color="inverted">
                {t("ERROR_RELOAD_MESSAGE")}
              </SubHeading>
            </Inline>
          </Columns.Column>
        ) : (
          <>
            <Columns.Column gap={1} align="start">
              <StatValue weight="medium" asChild>
                <data value={data.clicks}>{data.clicks}</data>
              </StatValue>
              <Text size={3} weight="medium" color="inverted">
                {t("PPC_MANAGE-BIDS_HEADER-CLICKS_LABEL")}
              </Text>
              <ButtonLink size="x-small" disabled={isDisabled} asChild>
                <Link to={isDisabled ? path.PPC_MANAGE_BIDS : "/ppl"}>
                  {t("PPC_MANAGE-BIDS_HEADER-CLICKS_LINK")}
                </Link>
              </ButtonLink>
            </Columns.Column>

            <Columns.Column gap={1} align="start">
              <StatValue weight="medium" asChild>
                <data value={isCTInstalled ? data.conversions : "NA"}>
                  {isCTInstalled ? data.conversions : t("NO_DATA")}
                </data>
              </StatValue>
              <Text size={3} weight="medium" color="inverted">
                {t("PPC_MANAGE-BIDS_HEADER-CONVERSIONS_LABEL")}
              </Text>
              <ButtonLink size="x-small" disabled={isDisabled} asChild>
                <Link
                  to={
                    isDisabled
                      ? path.PPC_MANAGE_BIDS
                      : path.VENDORS_COVERSION_TRACKING
                  }
                >
                  {t(
                    `PPC_MANAGE-BIDS_HEADER-CONVERSION_TRACKING_${
                      isCTInstalled ? "LINK" : "INSTALL"
                    }`
                  )}
                </Link>
              </ButtonLink>
            </Columns.Column>

            <Columns.Column gap={1} align="start">
              <StatValue weight="medium" asChild>
                <data value={data.spend}>{data.spend}</data>
              </StatValue>
              <Text size={3} weight="medium" color="inverted">
                {t("PPC_MANAGE-BIDS_HEADER-SPEND_LABEL")}
              </Text>
            </Columns.Column>

            <Columns.Column gap={1} align="start">
              <Inline gap={1} align="end">
                <StatValue weight="medium" asChild>
                  <data value={data.budget}>{data.budget}</data>
                </StatValue>

                {isDisabled ? (
                  <Icon name="Edit" color="grey" />
                ) : (
                  <>
                    <Link to="/ppc/edit/budget">
                      <EditIcon name="Edit" color="sky" />
                    </Link>
                  </>
                )}
              </Inline>
              <Text size={3} weight="medium" color="inverted">
                {t("PPC_MANAGE-BIDS_HEADER-MONTHLY_BUDGET_TEXT")}
              </Text>
            </Columns.Column>
          </>
        )}
      </Wrapper>
    </Stat4Columns>
  );
};
