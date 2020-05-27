import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

const IndexPage = ({ data }) => (
  <Layout>
    <Header siteTitle={data.github.organization.name} />

    <pre><code>
      {JSON.stringify(data, null, 2)}
         </code>
    </pre>
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
							name
							description
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
