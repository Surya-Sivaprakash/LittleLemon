import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

describe("ReservationForm", () => {
  test("renders form and submits reservation", () => {
    render(<ReservationForm />);

    // Fill in form inputs
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const dateInput = screen.getByLabelText("Date");
    const timeInput = screen.getByLabelText("Time");
    const numOfPeopleInput = screen.getByLabelText("Number of People");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(dateInput, { target: { value: "2023-06-16" } });
    fireEvent.change(timeInput, { target: { value: "18:00" } });
    fireEvent.change(numOfPeopleInput, { target: { value: "4" } });

    // Submit form
    const submitButton = screen.getByText("Book Table");
    fireEvent.click(submitButton);

    // Check if popup is displayed
    const reservationDetails = screen.getByText("Reservation Details");
    expect(reservationDetails).toBeInTheDocument();

    // Check if submitted data is displayed in the popup
    expect(screen.getByText("Name: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Date: 2023-06-16")).toBeInTheDocument();
    expect(screen.getByText("Time: 18:00")).toBeInTheDocument();
    expect(screen.getByText("Number of People: 4")).toBeInTheDocument();
  });
});
