import { Button } from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_app/employee-validation/")({
  component: RouteComponent,
});

const UserFormInitialData = {
  name: "",
  email: "",
  employeeId: "",
  joiningDate: "",
};

function RouteComponent() {
  const [userForm, setUserForm] = useState(UserFormInitialData);

  const [errors, setErrors] = useState({
    name: true,
    email: true,
    employeeId: true,
    joiningDate: true,
  });

  type InputName = keyof typeof UserFormInitialData;

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const validations: Record<InputName, () => boolean> = {
      name: () => /^[A-Za-z ]{4,}$/.test(value),
      email: () =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      employeeId: () => /^\d{6}$/.test(value),
      joiningDate: () => {
        const today = new Date().getTime();
        const joiningDate = new Date(value).getTime();

        return joiningDate <= today;
      },
    };

    const isValid = validations[name as InputName]();

    setErrors((prevState) => ({
      ...prevState,
      [name]: !isValid,
    }));

    setUserForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const isSubmitButtonDisabled =
    Object.values(errors).some((error) => error) ||
    Object.values(userForm).every((field) => !field);

  return (
    <div className="flex flex-col items-center py-6 gap-6">
      <div className="flex flex-col items-start w-1/2" data-testid="input-name">
        <input
          className="w-full border border-gray-300 p-2 rounded"
          type="text"
          name="name"
          value={userForm.name}
          onChange={handleInputChange}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {errors?.name && (
          <p className="text-red-500 mt-2">
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className="flex flex-col items-start w-1/2"
        data-testid="input-email"
      >
        <input
          className="w-full border border-gray-300 p-2 rounded"
          type="text"
          name="email"
          value={userForm.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors?.email && (
          <p className="text-red-500 mt-2">
            Email must be a valid email address
          </p>
        )}
      </div>
      <div
        className="flex flex-col items-start w-1/2"
        data-testid="input-employee-id"
      >
        <input
          className="w-full border border-gray-300 p-2 rounded"
          type="text"
          name="employeeId"
          value={userForm.employeeId}
          onChange={handleInputChange}
          placeholder="Employee ID"
        />
        {errors?.employeeId && (
          <p className="text-red-500 mt-2">
            Employee ID must be exactly 6 digits
          </p>
        )}
      </div>
      <div
        className="flex flex-col items-start w-1/2"
        data-testid="input-joining-date"
      >
        <input
          className="w-full border border-gray-300 p-2 rounded"
          type="date"
          name="joiningDate"
          value={userForm.joiningDate}
          onChange={handleInputChange}
          placeholder="Joining Date"
        />
        {errors?.joiningDate && (
          <p className="text-red-500 mt-2">
            Joining Date cannot be in the future
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitButtonDisabled}>
        Submit
      </Button>
    </div>
  );
}
