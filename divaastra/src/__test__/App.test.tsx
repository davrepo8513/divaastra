import { cleanup, render, screen } from "@testing-library/react";
import App from "../App";
import { act } from "react";

jest.useFakeTimers();

const createApp = () => render(<App />);

describe("App Component", () => {
  beforeAll(() => {
    createApp();
  });
  afterEach(() => {
    cleanup();
  });
  describe("UI test", () => {
    it("should render successfully", async () => {
      // ✅ Fast-forward the setTimeout in App.tsx
      act(() => {
        jest.runAllTimers();
      });
      const element = await screen.getByText(/App Loaded Successfully/i);
      expect(element).toBeInTheDocument();
    });
  });
});
