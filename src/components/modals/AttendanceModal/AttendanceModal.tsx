import { useState } from "react";

// Components
import { Button } from "../../../components/ui";

// Types
import { StateTypes } from "./AttendanceModal.types";

// Style
import Style from "./AttendanceModal.module.css";

export const AttendanceModal: React.FC = () => {
  const [formData, setFormData] = useState<StateTypes>({
    status: "",
    date: "",
  });
  const [notification, setNotification] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false); // Track success state

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!formData.status || !formData.date) {
      setNotification("Please select a status and enter a valid date.");
      setIsSuccess(false); // Not a success
      return;
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Example: 2024-12-31
    if (!datePattern.test(formData.date)) {
      setNotification("Invalid date format. Use YYYY-MM-DD.");
      setIsSuccess(false); // Not a success
      return;
    }

    // Example validation for overlapping leave (dummy logic)
    if (formData.status === "Present" && formData.date === "2024-12-25") {
      setNotification("You cannot mark attendance on a leave day.");
      setIsSuccess(false); // Not a success
      return;
    }

    // If all validations pass
    setNotification("Attendance marked successfully!");
    setIsSuccess(true); // Set success state
    setFormData({ status: "", date: "" });
  };

  return (
    <div className={Style.wrapper}>
      <h2 className={Style.mainTitle}>Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div className={Style.formWrapper}>
          <div className={Style.statusWrapper}>
            <label>Status: </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className={Style.inputStatus}
            >
              <option value="">Select Status</option>
              <option value="Present">Present</option>
              <option value="Early Out">Early Out</option>
              <option value="Missed Punch">Missed Punch</option>
            </select>
          </div>
          <div className={Style.statusWrapper}>
            <label>Date: </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={Style.inputStatus}
            />
          </div>
          <Button>Submit</Button>
        </div>
      </form>
      {notification && (
        <p className={isSuccess ? Style.successMessage : Style.errorMessage}>
          {notification}
        </p>
      )}
    </div>
  );
};
