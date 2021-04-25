// @flow strict
import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import type { Node as ReactNode } from "react";
import { useSiteMetadata } from "../../hooks";
import { layout } from "./Layout.module.scss";

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string,
  slug?: string,
  isPost: boolean,
  keywords: Array<string>,
};

const Layout = ({
  children,
  title,
  description,
  socialImage,
  slug,
  keywords,
  isPost,
}: Props) => {
  const { author, url, title: siteTitle } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);
  const metaUrl = url + slug;
  const type = isPost !== true ? "website" : "article";

  return (
    <div className={layout}>
      <Helmet>
        <html lang="zh-Hant" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={metaImageUrl} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:type" content={type} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+HK:300,400,500,700&display=swap&subset=chinese-hongkong"
          rel="layoutheet"
        />
        <link href="https://rsms.me/inter/inter.css" rel="layoutheet" />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
