import React from "react";
import View from "./Pagination";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const minProps = {
  loading: false,
  numberOfPages: 10,
  currentPage: 2
};

describe("Pagination", () => {
  it("renders", () => {
    const wrapper = shallow(<View {...minProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h3").text()).toEqual("change page");
  });

  it("one button has selected style", () => {
    const wrapper = shallow(<View {...minProps} />);
    expect(
      wrapper
        .find("ul")
        .childAt(1)
        .find("button")
        .hasClass("isSelected")
    ).toEqual(true);
  });
});
