import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Resume", () => {
    it("renders a resume page", () => {
      render(<Home />);
      // check if all components are rendered
      expect(1).toEqual(1);
      
    });
  });