import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <div>
		<pre><code>
			{ JSON.stringify(data, null, 2) }
		</code></pre>
  </div>
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

