"use strict";
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Frontmatter @infer {

      socialImage: File @fileByAbsolutePath(path: "static/media")
      
      socialImage: File @fileByAssetPath
    }

    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter
    }
  `;

  createTypes(typeDefs);
};

exports.createPages = require("./gatsby/create-pages");
exports.onCreateNode = require("./gatsby/on-create-node");
