import { render } from "@testing-library/react";
import Header from "./Header";

test("renders ", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
