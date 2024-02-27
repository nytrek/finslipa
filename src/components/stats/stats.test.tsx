import NextLinkMock from "@/utils/mocks/nextLinkMock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Stats } from ".";

/**
 * @description The contents of this test has been generated using ChatGPT
 */

// Mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock the next/link component
jest.mock("next/link", () => NextLinkMock);

/**
 * @see https://stackoverflow.com/questions/67574691/jest-react-intersectionobserver-mock-not-working
 * @see https://stackoverflow.com/questions/57008341/jest-testing-react-component-with-react-intersection-observer
 */
const intersectionObserverMock = () => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("<Stats/>", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: "/",
      locale: "en-US",
    }));
  });

  it("renders without crashing", () => {
    render(<Stats />);
    // Verify that the component renders without crashing
    expect(screen.getByTestId("stats")).toBeInTheDocument();
  });
});
