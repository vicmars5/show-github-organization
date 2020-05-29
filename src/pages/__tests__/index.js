import React from "react"
import renderer from "react-test-renderer"

import Index from "../index"

describe('Index page', () => {
  it('renders correctly', () => {
    const data = {
      github: {
        organization: {
          name: 'The Debt Collective',
          description: 'Offering debtors a shared platform for organization, advocacy, and direct action. ',
          avatarUrl: 'https://avatars0.githubusercontent.com/u/13947390?v=4',
          url: 'https://github.com/debtcollective',
          repositories: {
            totalCount: 52,
            edges: [
              {
                node: {
                  id: 'MDEwOlJlcG9zaXRvcnkxNjA3OTM2Ng==',
                  name: 'strikedebt-wp',
                  description: 'Strike Debt's Wordpress website',
                  url: 'https://github.com/debtcollective/strikedebt-wp',
                  mentionableUsers: {
                    totalCount: 9
                  },
                  stargazers: {
                    totalCount: 1
                  }
                }
              },
              {
                node: {
                  id: 'MDEwOlJlcG9zaXRvcnkyNTk5Mjg0OQ==',
                  name: 'debtcollective-web',
                  description: '(DEPRECATED) Website for debtcollective.org',
                  url: 'https://github.com/debtcollective/debtcollective-web',
                  mentionableUsers: {
                    totalCount: 11
                  },
                  stargazers: {
                    totalCount: 12
                  }
                }
              },
              {
                node: {
                  id: 'MDEwOlJlcG9zaXRvcnkzMjQzNDQ0Mg==',
                  name: 'defense-to-repayment-wizard',
                  description: 'Defense to Repayment wizard frontend',
                  url: 'https://github.com/debtcollective/defense-to-repayment-wizard',
                  mentionableUsers: {
                    totalCount: 12
                  },
                  stargazers: {
                    totalCount: 0
                  }
                }
              }
            ]
          }
        }
      }
    }
    const tree = renderer
      .create(<Index data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
