import { Button } from "@repo/ui/button";
import { useState } from "react";
import { trpc } from "../../../lib/trpc";

export default function FindContact() {
  const [formId, setFormId] = useState("");
  const findContactMutation = trpc.contact.findContactForm.useQuery({
    id: formId,
  });

  return (
    <div className="mb-8 h-screen">
      <h2 className="mb-4 text-2xl font-bold">Get One User</h2>
      <div className="mb-4 flex">
        <input
          className="mr-2 w-1/2 border border-gray-300 p-2 bg-slate-50"
          placeholder="Enter user id to get"
          value={formId || ""}
          onChange={(e) => setFormId(String(e.target.value))}
        />
        <Button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => findContactMutation.refetch()}
        >
          Get One User
        </Button>
      </div>
      {findContactMutation.data && (
        <div>
          <p>ID: {findContactMutation.isSuccess}</p>
        </div>
      )}
    </div>
  );
}
