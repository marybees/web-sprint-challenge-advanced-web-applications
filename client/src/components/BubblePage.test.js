import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { colorsAPITest as mockData } from "../colorsAPITest";

jest.mock("../colorsAPITest");

const bubbleData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
];

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  render(<BubblePage />);
  mockData.mockResolvedValueOnce(bubbleData);
});
