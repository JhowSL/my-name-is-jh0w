import { trpc } from "../../../lib/trpc";
import type { ApiResponse } from "../../../models/http-response/contact-form";
import {
  ErrorComponent,
  LoadingComponent,
  SuccessComponent,
  WarningComponent,
} from "./utils/reponse";

export default function Hello() {
  const req = trpc.contact.getAllContactForm.useQuery<ApiResponse>();

  if (req.isError) {
    return <ErrorComponent message="An error occurred while fetching data." />;
  }
  if (req.isLoading) {
    return <LoadingComponent />;
  }
  if (!req.data) {
    return <div>Nenhum dado encontrado</div>;
  }

  switch (req.data.status) {
    case "error":
      return <ErrorComponent message={req.data.message} />;
    case "warning":
      return <WarningComponent warnings={req.data.warnings} />;
    case "success":
      return <SuccessComponent data={req.data.data} />;
    default:
      return <div>Nenhum dado encontrado</div>;
  }
}
