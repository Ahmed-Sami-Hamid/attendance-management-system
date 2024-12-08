import { useState } from "react";

// Components
import { Button } from "../../../components";

// Types
import { LeaveRequest, ExistingLeave } from "./RequestLeaveModal.types";

// Style
import Style from "./RequestLeaveModal.module.css";

export const RequestLeaveModal: React.FC = () => {
  const [formData, setFormData] = useState<LeaveRequest>({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [existingLeaves, setExistingLeaves] = useState<ExistingLeave[]>([
    { leaveType: "Vacation", startDate: "2024-12-20", endDate: "2024-12-25" },
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateDates = (start: string, end: string): boolean => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (startDate > endDate) {
      setNotification("End date cannot be before start date.");
      return false;
    }

    for (const leave of existingLeaves) {
      const leaveStart = new Date(leave.startDate);
      const leaveEnd = new Date(leave.endDate);

      if (
        (startDate >= leaveStart && startDate <= leaveEnd) ||
        (endDate >= leaveStart && endDate <= leaveEnd) ||
        (startDate <= leaveStart && endDate >= leaveEnd)
      ) {
        setNotification(
          `Overlapping leave request found with ${leave.leaveType} from ${leave.startDate} to ${leave.endDate}.`
        );
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.leaveType ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.reason
    ) {
      setNotification("Please fill out all fields.");
      return;
    }

    if (!validateDates(formData.startDate, formData.endDate)) {
      return;
    }

    // Add new leave to the existing leaves
    setExistingLeaves((prev) => [
      ...prev,
      {
        leaveType: formData.leaveType,
        startDate: formData.startDate,
        endDate: formData.endDate,
      },
    ]);

    setNotification("Leave request submitted successfully!");
    setFormData({ leaveType: "", startDate: "", endDate: "", reason: "" });
  };

  return (
    <div className={Style.wrapper}>
      <h2 className={Style.mainTitle}>Request Leave</h2>
      <form onSubmit={handleSubmit}>
        <div className={Style.formWrapper}>
          <div className={Style.statusWrapper}>
            <label>Leave Type:</label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleInputChange}
              className={Style.inputStatus}
            >
              <option value="">Select Leave Type</option>
              <option value="Sick">Sick</option>
              <option value="Vacation">Vacation</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <div className={Style.statusWrapper}>
            <label>Start Date: </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className={Style.inputStatus}
            />
          </div>
          <div className={Style.statusWrapper}>
            <label>End Date: </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className={Style.inputStatus}
            />
          </div>
          <div className={Style.statusWrapper}>
            <label>Reason: </label>
            <textarea
              name="reason"
              rows={4}
              value={formData.reason}
              onChange={handleInputChange}
              className={Style.inputStatus}
            ></textarea>
          </div>
          <Button>Submit</Button>
        </div>
      </form>
      {notification && (
        <p
          className={
            notification.includes("successfully")
              ? Style.successMessage
              : Style.errorMessage
          }
        >
          {notification}
        </p>
      )}
    </div>
  );
};
