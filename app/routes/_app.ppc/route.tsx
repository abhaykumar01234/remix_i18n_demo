import { json } from "@remix-run/node";
import { Outlet as ModalOutlet, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Para, Title } from "~/components/Text";
import { Inline } from "~/components/vendorUI";
import { CostPerLead } from "~/routes/_app.ppc/components/CostPerLead";
import { Summary } from "~/routes/_app.ppc/components/Summary";
import { TryBudgetModal } from "~/routes/_app.ppc/components/TryBudgetModal";
import { TryCostPerLeadModal } from "~/routes/_app.ppc/components/TryCostPerLeadModal";

export const loader = () => {
  return json({
    clicks: 98,
    conversions: 23,
    spend: 7865,
    budget: 34500,
    targetCPL: 18500,
  });
};

export default function Page() {
  const { t } = useTranslation();
  const { budget, targetCPL } = useLoaderData<typeof loader>();

  return (
    <>
      <Title>PPC Page</Title>
      <Para>{t("greeting")}</Para>
      <Summary />
      <ModalOutlet context={{ budget, targetCPL }} />
      <CostPerLead />
      <Inline align="start" gap={5}>
        <TryBudgetModal initialBudget={0} />
        <TryCostPerLeadModal initialBudget={0} />
      </Inline>
    </>
  );
}
