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
import { Link, useActionData, Form as RemixForm } from "@remix-run/react";
import { type ActionArgs, redirect } from "@remix-run/node";

const StyledAnchor = styled(Anchor, { color: "$white" });
const ModalContent = styled(Modal.Content, { width: "300px" });
const FooterStack = styled(Stack, { gap: "$1 !important" });

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const budget = formData.get("budget");
  console.log(budget);
  return redirect("/ppc");
};

export default function EditPPCBudget() {
  const { t } = useTranslation();
  const errors = useActionData<typeof action>();
  const [isUnlimited, setIsUnlimited] = useState(false);

  console.log(errors);

  return (
    <Modal open>
      <ModalContent>
        <Stack gap={3} asChild>
          <RemixForm method="patch">
            <Modal.Body>
              <Form.Field
                htmlFor="budget"
                label={t("PPC_MANAGE-BIDS_HEADER-MONTHLY_BUDGET_TEXT")}
                status={isUnlimited ? "default" : "error"}
                message={
                  isUnlimited
                    ? "    "
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
                    id="budget"
                    name="budget"
                  />
                )}
              </Form.Field>
              <Checkboxfield
                id="budgetCheck1"
                label={t("ACCOUNT-SETTINGS_PPC-FORM_BUDGET_CHECKBOX_UNLIMITED")}
                checked={isUnlimited}
                onChange={() => setIsUnlimited((s) => !s)}
              />
            </Modal.Body>
            <FooterStack align="center" gap={1} asChild>
              <Modal.Footer>
                <Button isLoading={false}>{t("ACTION_SAVE")}</Button>
                <StyledAnchor as={Link} to="/ppc">
                  {t("ACTION_CANCEL-CHANGES")}
                </StyledAnchor>
              </Modal.Footer>
            </FooterStack>
          </RemixForm>
        </Stack>
      </ModalContent>
    </Modal>
  );
}
