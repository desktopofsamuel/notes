// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { AllMarkdownRemark } from "../types";
import Heatmap from "../components/Heatmap";

type Props = {
  data: AllMarkdownRemark,
};

const HabitPage = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const writeList = [];
  const cookList = [];
  const hikeList = [];

  const postEdges = data.allAirtable.edges;

  postEdges.forEach((postEdge) => {
    writeList.push({
      date: postEdge.node.data.Date,
      count: postEdge.node.data.Write_Helper,
    });
    cookList.push({
      date: postEdge.node.data.Date,
      count: postEdge.node.data.Cook_Helper,
    });
    hikeList.push({
      date: postEdge.node.data.Date,
      count: postEdge.node.data.Workout_Helper,
    });
  });

  return (
    <Layout
      title={`紀錄 | ${siteTitle}`}
      description={siteSubtitle}
      slug="/pages/habit"
    >
      {/* {JSONData.content.map((data, index) => {
        return <li index={index}> {data.item}</li>;
      })} */}

      <Sidebar isIndex />
      <Page title="紀錄">
        <p>
          幾年前開始使用 Google Sheets 紀錄生活中希望培養的好習慣，這次使用
          Airtable 及這個源自 Github
          的貢獻圖，將數據公開，每當網誌發佈新文章的時候將直接讀取數據更新最近幾個月的狀況。{" "}
        </p>
        <h2>每天要持續寫作</h2>
        <Heatmap data={writeList} />
        <h2>在家煮飯</h2>
        <Heatmap data={cookList} />
        <h2>運動</h2>
        <Heatmap data={hikeList} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query HabitQuery {
    allAirtable(sort: { fields: data___Date }) {
      edges {
        node {
          data {
            Date
            Write_Helper
            Cook_Helper
            Workout_Helper
          }
        }
      }
    }
  }
`;

export default HabitPage;
