/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fetch = require("isomorphic-fetch")
const path = require(`path`)

const BASE_URL = process.env.BASE_URL || "http://localhost:3000"

const getTalks = async () => {
  const data = await fetch(`${BASE_URL}/api/talks`)
  let parsed = await data.json()
  return parsed
}

const getSpeakers = async () => {
  const data = await fetch(`${BASE_URL}/api/speakers`)
  let parsed = await data.json()
  return parsed
}
module.exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  // Retrieve data
  const talks = await getTalks()
  const speakers = await getSpeakers()

  // Creating Nodes
  talks.list.forEach((elem, i) => {
    elem = { ...elem, _id: elem.id }
    const nodeContent = JSON.stringify(elem)
    const nodeMeta = {
      id: createNodeId("talk" + i),
      parent: null,
      children: [],
      internal: {
        type: `talks`,
        content: nodeContent,
        contentDigest: createContentDigest(elem),
      },
    }
    const node = Object.assign({}, elem, nodeMeta)
    createNode(node)
  })

  speakers.list.forEach((elem, i) => {
    elem = { ...elem, _id: elem.id }
    const nodeContent = JSON.stringify(elem)
    const nodeMeta = {
      id: createNodeId("speaker" + i),
      parent: null,
      children: [],
      internal: {
        type: `speakers`,
        content: nodeContent,
        contentDigest: createContentDigest(elem),
      },
    }
    const node = Object.assign({}, elem, nodeMeta)
    createNode(node)
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const talkSingleTemplate = path.resolve(`src/templates/talk.js`)
  const speakerSingleTemplate = path.resolve(`src/templates/speaker.js`)

  let result = await graphql(graphQLDataQuery)

  if (result.errors) {
    throw result.errors
  }

  // Create Talk  pages.
  result.data.allTalks.nodes.forEach(node => {
    createPage({
      // Path for this page — required
      path: `talk/${node._id}`,
      component: talkSingleTemplate,
      context: {
        id: node._id,
      },
    })
  })

  // Create Speaker pages.
  result.data.allSpeakers.nodes.forEach(node => {
    createPage({
      // Path for this page — required
      path: `speaker/${node._id}`,
      component: speakerSingleTemplate,
      context: {
        id: node._id,
      },
    })
  })
}

const graphQLDataQuery = `
query talks {
  allTalks {
    nodes {
      _id
      id
      name
      description
      date
      image
      speakers {
        id
        name
        image
        bio
        company
        twitter
      }
    }
  }
  allSpeakers {
    nodes {
      _id
      id
      name
      image
      bio
      company
      twitter
      talks {
        id
        name
        description
        date
        image
      }
    }
  }
}
`
