import type { FetchContactFormModel } from "../../../../models/contact-form";
import { generateKey } from "../../../../utils/generate-key";

export const LoadingComponent: React.FC = () => <div>👌Loading</div>;

export const ErrorComponent: React.FC<{ message: string }> = ({ message }) => (
  <div>😢Error: {message}</div>
);

export const WarningComponent: React.FC<{ warnings: string[] }> = ({
  warnings,
}) => (
  <div>
    ⚠ Warnings:
    <ul>
      {warnings.map((warning, index) => (
        <li key={generateKey()}>{warning}</li>
      ))}
    </ul>
  </div>
);

export const SuccessComponent: React.FC<{ data: FetchContactFormModel[] }> = ({
  data,
}) => (
  <div>
    {data.map((item) => (
      <div key={item.id} className="grid p-2">
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.contactEmail}</div>
        <div>{item.message}</div>
        <div>{item.dataSent}</div>
      </div>
    ))}
  </div>
);
