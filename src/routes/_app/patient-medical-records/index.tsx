import { createFileRoute } from "@tanstack/react-router";
import { Records } from "./-components/Records";
import { Search } from "./-components/Search";
import { useState } from "react";
import type { MedicalRecordSet } from "@/assets/medical-records";

export const Route = createFileRoute("/_app/patient-medical-records/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [record, setRecord] = useState<MedicalRecordSet | null>(null);

  return (
    <div className="flex flex-col items-center text-center p-6 gap-6">
      <h1 className="text-2xl font-bold">Patient Medical Records</h1>
      <Search setRecord={setRecord} />
      {record && <Records record={record} setRecord={setRecord} />}
    </div>
  );
}
