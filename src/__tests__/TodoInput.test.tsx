import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "../components/TodoInput/TodoInput";

describe("TodoInput", () => {
  const mockHandleKeyDown = jest.fn();
  const mockHandleClick = jest.fn();
  const mockInputRef = { current: null };

  beforeEach(() => {
    mockHandleKeyDown.mockClear();
    mockHandleClick.mockClear();
  });

  test("renders input and button", () => {
    render(
      <TodoInput
        formClass="inputClass"
        inputV={mockInputRef}
        handleKeyDown={mockHandleKeyDown}
        handleClick={mockHandleClick}
      />
    );

    const inputElement = screen.getByPlaceholderText(/type your task/i);
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText(/add/i);
    expect(buttonElement).toBeInTheDocument();

    expect(inputElement).toHaveClass("inputClass");
  });

  test("calls handleKeyDown when a key is pressed in the input", () => {
    render(
      <TodoInput
        formClass="inputClass"
        inputV={mockInputRef}
        handleKeyDown={mockHandleKeyDown}
        handleClick={mockHandleClick}
      />
    );

    const inputElement = screen.getByPlaceholderText(/type your task/i);

    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(mockHandleKeyDown).toHaveBeenCalledTimes(1);
  });

  test("calls handleClick when the button is clicked", () => {
    render(
      <TodoInput
        formClass="inputClass"
        inputV={mockInputRef}
        handleKeyDown={mockHandleKeyDown}
        handleClick={mockHandleClick}
      />
    );

    const buttonElement = screen.getByText(/add/i);

    fireEvent.click(buttonElement);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});