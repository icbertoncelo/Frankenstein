import {
  MEDICAL_RECORDS,
  type MedicalRecordSet,
} from "@/assets/medical-records";
import { Button } from "@/components/Button";

interface RecordsProps {
  record: MedicalRecordSet;
  setRecord: (record: MedicalRecordSet) => void;
}

export function Records({ record, setRecord }: RecordsProps) {
  const {
    userName,
    userDob,
    meta: { height },
  } = record.data[0];

  function handleNextRecord() {
    const recordId = Number(record.id);

    if (recordId === MEDICAL_RECORDS.length) {
      setRecord(MEDICAL_RECORDS[0]);
    } else {
      const newRecord = MEDICAL_RECORDS.find(
        (item) => Number(item.id) === recordId + 1
      );
      newRecord && setRecord(newRecord);
    }
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center"
      id="profile-view"
    >
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-t-lg shadow p-6 flex flex-row justify-between items-center border-b">
          <div
            id="patient-profile"
            data-testid="patient-profile"
            className="flex flex-col gap-1 items-start"
          >
            <h4 id="patient-name" className="text-xl font-bold text-gray-800">
              {userName}
            </h4>
            <h5 id="patient-dob" className="text-md text-gray-600">
              DOB: {userDob} cm
            </h5>
            <h5 id="patient-height" className="text-md text-gray-600">
              Height: {height}
            </h5>
          </div>
          <Button
            disabled={!record}
            data-testid="next-btn"
            onClick={handleNextRecord}
          >
            Next
          </Button>
        </div>
        <table
          id="patient-records-table"
          className="w-full bg-white rounded-b-lg shadow overflow-hidden"
        >
          <thead id="table-header" className="bg-blue-100">
            <tr>
              <th className="py-3 px-4 text-center font-semibold text-gray-700">
                SL
              </th>
              <th className="py-3 px-4 text-center font-semibold text-gray-700">
                Date
              </th>
              <th className="py-3 px-4 text-center font-semibold text-gray-700">
                Diagnosis
              </th>
              <th className="py-3 px-4 text-center font-semibold text-gray-700">
                Weight
              </th>
              <th className="py-3 px-4 text-center font-semibold text-gray-700">
                Doctor
              </th>
            </tr>
          </thead>
          <tbody id="table-body" data-testid="patient-table">
            {record?.data.map((entry, index) => (
              <tr className="border-t" key={entry.id}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  {new Date(entry.timestamp).toLocaleDateString()}
                </td>
                <td className="py-2 px-4">{entry.diagnosis.name}</td>
                <td className="py-2 px-4">{entry.meta.weight}</td>
                <td className="py-2 px-4">{entry.doctor.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
