import React from "react";
import Component from "components/Component";
import { render } from "lib/testing-library";

describe("Component", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<Component>component</Component>);
    expect(getByText("component")).toBeInTheDocument();
  });
});
