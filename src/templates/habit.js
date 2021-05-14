// @flow strict
import React from "react";
import { graphql } from "gatsby";
// import JSONData from "https://spreadsheets.google.com/feeds/cells/1-DiywKC2p36mnix9gm-Le8bpqwU3H91hZy0PRsUgvmQ/1/public/full?alt=json";
import CalendarHeatmap from "react-calendar-heatmap";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { AllMarkdownRemark } from "../types";
import "react-calendar-heatmap/dist/styles.css";
import "../../static/css/heatmap.css";
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
        <h2>2021 每天要持續寫作</h2>
        <Heatmap data={writeList} />
        <h2>Cook At Home</h2>
        <Heatmap data={cookList} />
        <h2>Hike</h2>
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
