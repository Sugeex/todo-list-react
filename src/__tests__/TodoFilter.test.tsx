import { render, screen, fireEvent } from "@testing-library/react";
import TodoFilter from "../components/TodoFilter/TodoFilter";

describe("TodoFilter", () => {
  const mockSetFilter = jest.fn();

  beforeEach(() => {
    mockSetFilter.mockClear();
  });

  test("renders filter buttons with correct initial state", () => {
    render(<TodoFilter filter="all" setFilter={mockSetFilter} />);

    const allButton = screen.getByText(/all/i);
    const activeButton = screen.getByText(/active/i);
    const doneButton = screen.getByText(/done/i);

    expect(allButton).toBeInTheDocument();
    expect(activeButton).toBeInTheDocument();
    expect(doneButton).toBeInTheDocument();

    expect(allButton).toHaveClass("currentFilter");
    expect(activeButton).not.toHaveClass("currentFilter");
    expect(doneButton).not.toHaveClass("currentFilter");
  });

  test("calls setFilter with 'active' when Active button is clicked", () => {
    render(<TodoFilter filter="all" setFilter={mockSetFilter} />);

    const activeButton = screen.getByText(/active/i);

    fireEvent.click(activeButton);
    expect(mockSetFilter).toHaveBeenCalledWith("active");
  });

  test("calls setFilter with 'done' when Done button is clicked", () => {
    render(<TodoFilter filter="all" setFilter={mockSetFilter} />);

    const doneButton = screen.getByText(/done/i);

    fireEvent.click(doneButton);
    expect(mockSetFilter).toHaveBeenCalledWith("done");
  });
});