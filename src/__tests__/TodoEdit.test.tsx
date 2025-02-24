import { render, screen, fireEvent } from "@testing-library/react";
import TodoEdit from "../components/TodoEdit/TodoEdit";

describe("TodoEdit", () => {
  const mockOnSave = jest.fn();

  beforeEach(() => {
    mockOnSave.mockClear();
  });

  test("renders initial text and button", () => {
    render(<TodoEdit text="Initial Text" id={1} onSave={mockOnSave} />);

    const inputElement = screen.getByPlaceholderText(/update task/i);
    expect(inputElement).toHaveValue("Initial Text");

    const buttonElement = screen.getByText(/update task/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("updates input value when typing", () => {
    render(<TodoEdit text="Initial Text" id={1} onSave={mockOnSave} />);

    const inputElement = screen.getByPlaceholderText(/update task/i);

    fireEvent.change(inputElement, { target: { value: "New Text" } });
    expect(inputElement).toHaveValue("New Text");
  });
});