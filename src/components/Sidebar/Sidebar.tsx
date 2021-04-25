// @flow strict
import React from "react";
import Author from "./Author";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Menu from "./Menu";
import Category from "./Category";
import { sidebar } from "./Sidebar.module.scss";
import { useSiteMetadata } from "../../hooks";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu, category } = useSiteMetadata();

  return (
    <div className={sidebar["sidebar"]}>
      <div className={sidebar["sidebar__inner"]}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Category category={category} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
