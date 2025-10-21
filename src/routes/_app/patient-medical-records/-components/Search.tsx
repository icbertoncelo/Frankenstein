import { medical_records } from "@/assets/medical-records";
import { Button } from "@/components/Button";

interface SearchProps {
  setRecord: (record: any) => void;
  setId: (id: string) => void;
  id: string;
}

export function Search({ setRecord, setId, id }: SearchProps) {
  function handleSelectPatient(event: React.ChangeEvent<HTMLSelectElement>) {
    setId(event.target.value);
  }

  function handleShowRecords(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!id) {
      alert("Please select a patient name");
    }

    setRecord(medical_records.find((record) => record.id === id));
  }

  return (
    <form
      className="flex flex-row items-end gap-4 w-full max-w-2xl"
      onSubmit={handleShowRecords}
    >
      <div className="flex-1">
        <select
          data-testid="patient-name"
          defaultValue="0"
          onChange={handleSelectPatient}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        >
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((record) => (
            <option value={record.id} key={record.id}>
              {record.data[0].userName}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" data-testid="show">
        Show
      </Button>
    </form>
  );
}
