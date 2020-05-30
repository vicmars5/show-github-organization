import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../organisms/layout'
import Header from '../organisms/header'
import Metadata from '../organisms/metadata'
import Repository from '../organisms/repository'

const IndexPage = ({ data }) => (
  <Layout>
    <Metadata {...data.github.organization} />
    <Header {...data.github.organization} />

    <main className='container mx-auto p-3'>
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
