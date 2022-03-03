import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom';
import App from "./App";

describe('should check to-do list', () => {
    test('when no tasks add', () => {
        render(<App />);

        const actual = screen.getByText("No task");

        expect(actual).toBeInTheDocument();
    })
})

describe('should check the buttons', () => {
    test('generation correct task clear button', () => {
        render(<App />);

        const actual = screen.getByRole("button", { name: "Clear Tasks" });

        expect(actual).toBeInTheDocument();
    })

    test('generation correct add task button', () => {
        render(<App />);

        const actual = screen.getByRole("button", { name: "Add Task" });

        expect(actual).toBeInTheDocument();
    })

    test('add tasks to list button functionality', () => {
        render(<App />);

        const buttonAddTask = screen.getByRole("button", { name: "Add Task" });
        const inputTask = screen.getByTestId("input-add-task");

        userEvent.type(inputTask, "Estudar React");
        userEvent.click(buttonAddTask);

        const actual = screen.getByText("Estudar React");

        expect(actual).toBeInTheDocument();
    })

    test('clear tasks from list button functionality', () => {
        render(<App />);

        const buttonAddTask = screen.getByRole("button", { name: "Add Task" });
        const buttonClearTask = screen.getByRole("button", { name: "Clear Tasks" });
        const inputTask = screen.getByTestId("input-add-task");

        userEvent.type(inputTask, "Estudar React");
        userEvent.click(buttonAddTask);

        const temp = screen.getByText("Estudar React");

        expect(temp).toBeInTheDocument();

        const buttonTask = screen.getByRole("button", { name: "Estudar React" })

        userEvent.click(buttonTask)
        userEvent.click(buttonClearTask);

        const actual = screen.getByText("No task");

        expect(actual).toBeInTheDocument();
    })

    test("change class on click in the task functionality", () => {
        render(<App />);

        const buttonAddTask = screen.getByRole("button", { name: "Add Task" });
        const inputTask = screen.getByTestId("input-add-task");

        userEvent.type(inputTask, "Estudar React");
        userEvent.click(buttonAddTask);

        const buttonTask = screen.getByRole("button", { name: "Estudar React" });

        expect(buttonTask).toHaveClass("task");

        userEvent.click(buttonTask);

        expect(buttonTask).toHaveClass("task done");
    })

    test("should not insert task when description is not passed", () => {
        render(<App />);

        const buttonAddTask = screen.getByRole("button", { name: "Add Task" });
        const inputTask = screen.getByTestId("input-add-task");
        const listTask = screen.getByText("No task");

        userEvent.type(inputTask, " ");
        userEvent.click(buttonAddTask);

        expect(listTask).toBeInTheDocument();
    })
})