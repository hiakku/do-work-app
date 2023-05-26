import { render } from "@testing-library/react";
import App from "./App";

describe("Test for App component", () => {
  jest.mock("../Header/Header");
  it("Match snapshot for App component ", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
