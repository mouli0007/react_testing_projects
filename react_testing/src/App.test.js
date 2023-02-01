import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test("renders learn react link", () => {
//   // Render in virtual Dom
//   render(<App />);

//   // Getting a specific element what we want to be tested !
//   const linkElement = screen.getByText(/learn react/i);

//   // assertion exxpecting the element to be where we want !
//   //  if one aseertion fails whole test fails !
//   expect(linkElement).toBeInTheDocument();
// });

// // 1st parameter describes what we wnat to be tested !

// test("description", () => {
//   // Render in virtual Dom !
//   render(<App />);
// });

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// My very first test !

// To test wheather all of the inputs elements are  empty !

test("inputs should be initially empty", () => {
  //  1 => Step One !
  // Rendering the App
  render(<App />);
  // 2 => Step Two !
  // Getting the element whaat we want to test
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPassword = screen.getByLabelText(/confirm password/i);
  // Making the element to be as a blank feild at the initial render
  // We ccan have multiple assertion
  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmPassword.value).toBe("");
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

test("Should be able to type an email"),
  () => {
    render(<App />);

    // For Getting multiple elements we have to use third parameter
    const emailInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });

    userEvent.type(emailInputElement, "moulivj4@gmail.com");
    expect(emailInputElement.value).toBe("moulivj4@gmail.com");
  };

// Password field

test("should be able to type our password", () => {
  render(<App />);
  const passwordInputElement = screen.getByLabelText("Password");
  userEvent.type(passwordInputElement, "password!");
  expect(passwordInputElement.value).toBe("password!");
});

test("should be able to type confirm Password", () => {
  render(<App />);

  const confirmPassword = screen.getByLabelText(/confirm password/i);
  userEvent.type(confirmPassword, "password!");
  expect(confirmPassword.value).toBe("password!");
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Error Message !
test("should show email error message or invalid email", () => {
  render(<App />);

  const emailErrorElement = screen.queryByText(
    /The Email you input is invalid/i
  );

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });

  const submitBtnelement = screen.getByRole("button", {
    name: /submit/i,
  });

  expect(emailErrorElement).not.toBeInTheDocument();
  userEvent.type(emailInputElement, "mouli.com");
  userEvent.click(submitBtnelement);

  const emailErrorElementAgain = screen.queryByText(
    /The email you input is invalid/i
  );
  expect(emailErrorElementAgain).toBeInTheDocument();
});

// Password should be more than 5 chracters

test("should show password error if password if less than 5 chracters", () => {
  render(<App />);

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });

  const passwordErrorElement = screen.queryByText(
    /The password you entered  shoul contain 5 or more chracters/i
  );
  const PasswordInputElement = screen.getByLabel("Password");

  userEvent.type(emailInputElement, "mouli.com");
  expect(passwordErrorElement).not.toBeInTheDocument();

  userEvent.type(passwordErrorElement, "123");

  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });
  userEvent.click(submitBtnElement);

  const passwordErrorElementAgain = screen.queryByText(
    /The password you entered  shoul contain 5 or more chracters/i
  );

  expect(passwordErrorElement).toBeInTheDocument();
});
