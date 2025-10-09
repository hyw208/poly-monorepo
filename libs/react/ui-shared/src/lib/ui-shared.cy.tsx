import * as React from "react";
import UiShared from "./ui-shared";

describe(UiShared.name, () => {
  it("renders", () => {
    cy.mount(<UiShared />);
  });
});
