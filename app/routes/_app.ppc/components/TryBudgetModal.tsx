import {
  styled,
  Modal,
  Form,
  TextInput,
  Checkboxfield,
  Button,
  Stack,
} from "~/components/vendorUI";
import { Anchor } from "~/components/Text";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { useTranslation } from "react-i18next";
import { useFetcher } from "@remix-run/react";

const ModalContent = styled(Stack, { width: "300px" });

type BudgetFormProps = {
  initialBudget: number;
};

export const TryBudgetModal = ({ initialBudget }: BudgetFormProps) => {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const [budget, setBudget] = useState(initialBudget);
  const [isUnlimited, setIsUnlimited] = useState(false);

  return (
    <fetcher.Form method="patch">
      <ModalContent gap={3}>
        <Modal.Body>
          <Form.Field
            htmlFor="budgetppc"
            label={t("PPC_MANAGE-BIDS_HEADER-MONTHLY_BUDGET_TEXT")}
            status={isUnlimited ? "default" : "error"}
            message={
              isUnlimited
                ? ""
                : `${t("PPC_MANAGE-BIDS_HEADER-MONTHLY_BUDGET_ERROR", {
                    budget: "$1,000.00",
                  })}`
            }
            disabled={isUnlimited}
          >
            {isUnlimited ? (
              <TextInput value="Unlimited" />
            ) : (
              <NumberFormat
                prefix="$"
                decimalScale={2}
                fixedDecimalScale
                thousandSeparator
                allowNegative={false}
                customInput={TextInput}
                id="budgetppc"
                name="budgetppc"
                value={budget}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const budget = Number(e.target.value.replace("$", ""));
                  setBudget(budget);
                }}
              />
            )}
          </Form.Field>
          <Checkboxfield
            id="budgetppccheck"
            label={t("ACCOUNT-SETTINGS_PPC-FORM_BUDGET_CHECKBOX_UNLIMITED")}
            checked={isUnlimited}
            onChange={() => setIsUnlimited((s) => !s)}
          />
        </Modal.Body>
        <Stack>
          <Button isLoading={false}>{t("ACTION_SAVE")}</Button>
          <Anchor as="button">{t("ACTION_CANCEL-CHANGES")}</Anchor>
        </Stack>
      </ModalContent>
    </fetcher.Form>
  );
};
