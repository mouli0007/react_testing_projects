import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";

describe("Test the App Component", () => {
  test("header renders with react testing heading in the document", () => {
    const component = render(<App />);
    const linkElement = component.getByText(/login form testing/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("sub header to be in the document", () => {
    const component = render(<App />);
    const linkElement = component.getByText(
      /testing the first react application/i
    );
    expect(linkElement).toBeInTheDocument();
  });

  // third Test Case !
  test("render login component in doucment", () => {
    const { getByLabelText } = render(<App />);
    const childElement = getByLabelText("Email");
    expect(childElement).toBeInTheDocument();
  });
});
