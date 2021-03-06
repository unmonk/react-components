import { shallow } from "enzyme";
import React from "react";

import Strip from "./Strip";

describe("Strip ", () => {
  it("renders", () => {
    const wrapper = shallow(<Strip>Test content</Strip>);
    expect(wrapper).toMatchSnapshot();
  });

  it("can set a background", () => {
    const wrapper = shallow(<Strip background="test.png" />);
    expect(wrapper.prop("style")).toStrictEqual({
      backgroundImage: "url('test.png')",
    });
  });

  it("can set a type", () => {
    const wrapper = shallow(<Strip type="dark" />);
    expect(wrapper.prop("className").includes("p-strip--dark")).toBe(true);
  });

  it("can set the element", () => {
    const wrapper = shallow(<Strip element="section" />);
    expect(wrapper.type()).toEqual("section");
  });

  it("can be bordered", () => {
    const wrapper = shallow(<Strip bordered={true} />);
    expect(wrapper.prop("className").includes("is-bordered")).toBe(true);
  });

  it("can be dark", () => {
    const wrapper = shallow(<Strip dark={true} />);
    expect(wrapper.prop("className").includes("is-dark")).toBe(true);
  });

  it("can be deep", () => {
    const wrapper = shallow(<Strip deep={true} />);
    expect(wrapper.prop("className").includes("is-deep")).toBe(true);
  });

  it("can be light", () => {
    const wrapper = shallow(<Strip light={true} />);
    expect(wrapper.prop("className").includes("is-light")).toBe(true);
  });

  it("can be shallow", () => {
    const wrapper = shallow(<Strip shallow={true} />);
    expect(wrapper.prop("className").includes("is-shallow")).toBe(true);
  });

  it("can set a col size", () => {
    const wrapper = shallow(<Strip colSize="4" />);
    expect(wrapper.find("Col").first().prop("size")).toEqual("4");
  });

  it("can not include a col", () => {
    const wrapper = shallow(<Strip includeCol={false} />);
    expect(wrapper.find(".col-12").exists()).toBe(false);
  });

  it("can set row classes", () => {
    const wrapper = shallow(<Strip rowClassName="row--extra" />);
    expect(wrapper.find("Row").prop("className").includes("row--extra")).toBe(
      true
    );
  });

  it("can add additional classes", () => {
    const wrapper = shallow(<Strip className="extra-class" />);
    const className = wrapper.prop("className");
    expect(className.includes("p-strip")).toBe(true);
    expect(className.includes("extra-class")).toBe(true);
  });
});
