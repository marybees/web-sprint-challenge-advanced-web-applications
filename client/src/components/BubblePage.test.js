import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColor as mockAPI } from "../fetchColor";

jest.mock("../fetchColor");

const colorData = [
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
  // mockAPI.mockResolvedValueOnce(colorData);
});
