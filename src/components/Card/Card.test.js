import { shallow } from "enzyme";
import React from "react";

import Card from "./Card";

describe("Card ", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Card title="This is the title">Test content</Card>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("can display a header", () => {
    const wrapper = shallow(<Card thumbnail="test.png" />);
    expect(wrapper.find(".p-card__thumbnail").prop("src")).toEqual("test.png");
  });

  it("can be highlighted", () => {
    const wrapper = shallow(<Card highlighted={true} />);
    expect(wrapper.prop("className").includes("p-card--highlighted")).toBe(
      true
    );
  });

  it("can be an overlay", () => {
    const wrapper = shallow(<Card overlay={true} />);
    expect(wrapper.prop("className").includes("p-card--overlay")).toBe(true);
  });

  it("can add additional classes", () => {
    const wrapper = shallow(<Card className="extra-class" />);
    const className = wrapper.prop("className");
    expect(className.includes("p-card")).toBe(true);
    expect(className.includes("extra-class")).toBe(true);
  });
});
