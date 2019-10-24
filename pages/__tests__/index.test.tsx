import React from "react";
import { mount } from "enzyme";
import fetch from "isomorphic-unfetch";

import Index from "../index";

describe("Index", () => {
  it("renders successfully", async () => {
    const res = await fetch("http://brokenbanana.tech/api/allPosts");
    const data = await res.json();

    const wrapper = mount(
      <div>
        <Index data={data} />
      </div>
    );

    expect(wrapper.exists("Index")).toBeTruthy();
  });
});

