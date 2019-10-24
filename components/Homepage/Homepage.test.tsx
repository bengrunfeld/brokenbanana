import React from "react";
import fetch from "isomorphic-unfetch";
import { ThemeProvider } from "styled-components";
import { mount } from "enzyme";
import data from "../../api/_data";
import { theme } from "../../assets/theme";

import Homepage from "./Homepage";

describe("Homepage", () => {
  it("renders successfully", async () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Homepage data={data} />
      </ThemeProvider>
    );

    expect(wrapper.exists("Homepage")).toBeTruthy();
  });
});
