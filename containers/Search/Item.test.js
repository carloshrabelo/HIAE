import React from "react";

import { render } from "@testing-library/react";
import Item from "./Item";

const props = {
  symbol: "FB",
  name: "Facebook",
};

describe("<Item/>", () => {
  describe("#render", () => {
    it("Render base component", () => {
      const { getByText } = render(<Item {...props} />);

      expect(getByText(props.name)).toBeInTheDocument();
      expect(getByText(props.symbol)).toBeInTheDocument();
    });
  });
});
