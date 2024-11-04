import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DebouncedInput from "../src/challenges/DebouncedInput";

jest.useFakeTimers();
test("debounced input box actually renders", () => {
    render(<DebouncedInput />);
    const input = screen.getByRole("textbox", {name: "debounced-game-input"});

    fireEvent.change(input, {target: {value: "F"}});

    jest.advanceTimersByTime(500);
    expect(screen.getByText("Final Fantasy VII Remake")).toBeInTheDocument();
    
})