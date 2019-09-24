import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import View from "./App";

configure({ adapter: new Adapter() });

it("renders", () => {
  shallow(<View />);
});
