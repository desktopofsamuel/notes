// @flow strict
import React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery, StaticQuery } from "gatsby";
import TravelList from "./travel-list";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import allMarkdownRemark from "../../jest/__fixtures__/all-markdown-remark";
import type { RenderCallback } from "../types";

describe("TravelList", () => {
  const props = {
    ...siteMetadata,
    ...allMarkdownRemark,
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(props),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(<TravelList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
