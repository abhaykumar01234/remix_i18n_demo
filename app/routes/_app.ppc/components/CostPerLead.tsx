import { FullWidthInline, StatValue, EditIcon } from "./Summary";
import {
  Columns,
  styled,
  Text,
  Inline,
  Icon,
  Stack,
} from "~/components/vendorUI";
// import { useTranslation } from "react-i18next";
import { Para } from "~/components/Text";
import { Link } from "@remix-run/react";

const Wrapper = styled(FullWidthInline, {
  background: "#f4f4f4",
});

export const CostPerLead = () => {
  // const { t } = useTranslation();

  const isDisabled = false;
  return (
    <Columns columns={4} asChild>
      <Wrapper>
        <Columns.Column gap={3} align="start">
          <Inline gap={1} align="end">
            <StatValue weight="medium" asChild>
              <data value={18000}>$18,000</data>
            </StatValue>
            {isDisabled ? (
              <Icon name="Edit" color="grey" />
            ) : (
              <>
                <Link to="/ppc/edit/target-cpl">
                  <EditIcon name="Edit" color="sky" />
                </Link>
              </>
            )}
          </Inline>
          <Stack gap={1}>
            <Para>Product Name</Para>
            <Text size={3} weight="medium">
              Target Cost-Per-Lead
            </Text>
          </Stack>
        </Columns.Column>

        <Columns.Column span={2}>
          <Text size={5} weight="medium" color="brand">
            Target Cost-Per-Lead
          </Text>
          <Para>
            Sharing your target metrics will provide you with bidding related
            recommendations and opportunities.
          </Para>
        </Columns.Column>
      </Wrapper>
    </Columns>
  );
};
