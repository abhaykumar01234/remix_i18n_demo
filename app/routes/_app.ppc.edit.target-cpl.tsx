import {
  styled,
  Modal,
  Form,
  TextInput,
  Button,
  Stack,
} from "~/components/vendorUI";
import { Anchor } from "~/components/Text";
import NumberFormat from "react-number-format";
import { useTranslation } from "react-i18next";
import { Link, Form as RemixForm, useOutletContext } from "@remix-run/react";
import { type ActionArgs, redirect } from "@remix-run/node";

const StyledAnchor = styled(Anchor, { color: "$white" });
const ModalContent = styled(Modal.Content, { width: "300px" });
const FooterStack = styled(Stack, { gap: "$1 !important" });

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const budget = formData.get("targetCPL");
  console.log(budget);
  return redirect("/ppc");
};

export default function EditPPCBudget() {
  const { t } = useTranslation();
  const data = useOutletContext<{ targetCPL: string }>();
  return (
    <Modal open>
      <ModalContent>
        <Stack gap={3} asChild>
          <RemixForm method="patch">
            <Modal.Body>
              <Form.Field
                htmlFor="targetCPL"
                label={t("PPC_MANAGE-BIDS_HEADER-MONTHLY_BUDGET_TEXT")}
                status="default"
              >
                <NumberFormat
                  prefix="$"
                  decimalScale={2}
                  fixedDecimalScale
                  thousandSeparator
                  allowNegative={false}
                  customInput={TextInput}
                  id="targetCPL"
                  name="targetCPL"
                  defaultValue={data?.targetCPL}
                />
              </Form.Field>
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
