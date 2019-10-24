import React from "react";
import { mount } from "enzyme";
import fetch from "isomorphic-unfetch";
import data from "../../api/_data";

import Homepage from "./Homepage";

describe("Homepage", () => {
  it("renders successfully", async () => {
    const wrapper = mount(
      <div>
        <Homepage data={data} />
      </div>
    );

    expect(wrapper.exists("Homepage")).toBeTruthy();
  });
});
