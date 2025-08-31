import App from "@shieldspire/App";
import { cleanup, render, screen } from "@testing-library/react";
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
      const element = await screen.findByText(/Home Page/i);
      expect(element).toBeInTheDocument();
    });
  });
});
