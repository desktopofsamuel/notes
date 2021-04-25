// @flow strict
import React from "react";
import { copyrightstyles } from "./Copyright.module.scss";

type Props = {
  copyright: string;
};

const Copyright = ({ copyright }: Props) => (
  <div className={copyrightstyles["copyright"]}>{copyright}</div>
);

export default Copyright;
