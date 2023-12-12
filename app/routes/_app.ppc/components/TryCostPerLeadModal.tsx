import {
  styled,
  Text,
  Modal,
  Form,
  TextInput,
  Button,
  Stack,
} from "~/components/vendorUI";
import { Anchor } from "~/components/Text";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { useTranslation } from "react-i18next";
// import { useFetcher } from "@remix-run/react";

const ModalContent = styled(Stack, { width: "300px" });

type BudgetFormProps = {
  initialBudget: number;
};

export const TryCostPerLeadModal = ({ initialBudget }: BudgetFormProps) => {
  const { t } = useTranslation();
  // const fetcher = useFetcher();
  const [budget, setBudget] = useState(initialBudget);

  return (
    <ModalContent gap={3}>
      <Modal.Body>
        <Text size={3} color="brand">
          monday.com
        </Text>
        <Form.Field
          htmlFor="targetCPL2"
          label={t("PPC_MANAGE-BIDS_COST-PER-LEAD_TARGET-CPL")}
          status="default"
        >
          <NumberFormat
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
            thousandSeparator
            allowNegative={false}
            customInput={TextInput}
            id="targetCPL2"
            name="targetCPL2"
            value={budget}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const budget = Number(e.target.value.replace("$", ""));
              setBudget(budget);
            }}
          />
        </Form.Field>
      </Modal.Body>
      <Stack>
        <Button isLoading={false}>{t("ACTION_SAVE")}</Button>
        <Anchor as="button">{t("ACTION_CANCEL-CHANGES")}</Anchor>
      </Stack>
    </ModalContent>
  );
};
