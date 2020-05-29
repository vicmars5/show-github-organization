import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Repository from '../components/repository'

const IndexPage = ({ data }) => (
  <Layout>
    <Header {...data.github.organization} />

    <main className="container mx-auto p-3">
      {data.github.organization.repositories.edges.map((repository) => (
        <Repository
          key={repository.node.id}
          name={repository.node.name}
          description={repository.node.description}
          url={repository.node.url}
          contributorsCount={repository.node.mentionableUsers.totalCount}
          starsCount={repository.node.stargazers.totalCount}
        />
      ))}
    </main>
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    github {
      organization (login: "debtcollective") {
        name
        description
        avatarUrl
        url
        repositories (first: 100) {
          totalCount
          edges {
            node {
              id
              name
              description
              url
              mentionableUsers (first: 1) {
                totalCount
              }
              stargazers (first: 1) {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
