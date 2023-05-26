import { render } from "@testing-library/react";
import Index from "./index";

test("renders ", () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: "censored" })
    )
  ).toMatchSnapshot();
});
