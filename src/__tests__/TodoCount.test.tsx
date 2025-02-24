import { render, screen } from "@testing-library/react";
import TodoCount from "../components/TodoCount/TodoCount";

describe("TodoCount", () => {
    test("renders total tasks count correctly", () => {
      const tasks = [
        { isComplite: false },
        { isComplite: true },
        { isComplite: false },
      ];
  
      render(<TodoCount counter={tasks} />);
  
      const totalTasks = screen.getByText(/tasks/i).closest("div");
      expect(totalTasks).toHaveTextContent("Tasks 3");
    });
  
    test("renders completed tasks count correctly", () => {
      const tasks = [
        { isComplite: false },
        { isComplite: true },
        { isComplite: true },
      ];
  
      render(<TodoCount counter={tasks} />);
  
      const completedTasks = screen.getByText(/done/i).closest("div");
      expect(completedTasks).toHaveTextContent("Done 2 of 3");
    });
  
    test("renders zero completed tasks correctly", () => {
      const tasks = [
        { isComplite: false },
        { isComplite: false },
        { isComplite: false },
      ];
  
      render(<TodoCount counter={tasks} />);
  
      const completedTasks = screen.getByText(/done/i).closest("div");
      expect(completedTasks).toHaveTextContent("Done 0 of 3");
    });
  });