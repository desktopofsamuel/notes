// @flow strict
import React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery, StaticQuery } from "gatsby";
import HabitPage from "./habit";
import siteMetadata from "../../jest/__fixtures__/site-metadata";
import type { RenderCallback } from "../types";

describe("HabitPage", () => {
  const props = {
    ...siteMetadata,
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(props),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(<HabitPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
