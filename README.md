A repo to show GitHub organizations using the GitHub GraphQL API and Gatsby.


## Start
Run project.
```
yarn
yarn dev
```

Once the server is running you can see a preview in http://localhost:8000 GraphiQL in this url http://localhost:8000/___graphql 

This repo is configured for automatic deploys to Netlify.

## Project setup
I wanted to keep this project as simple as possible avoiding the use of unnecessary dependencies to provide a better experience to the user and developer. The result is a lightweight website with a loading time of 1.25s in my home network.

[See performance test](https://gtmetrix.com/reports/5ed098583465d8000719819e--stoic-noyce-23cda7.netlify.app/E4Dq2f6L)

![GitHub Logo](/docs/performance-test.png)

To accomplish this goal I made use of tools like `purge-css` to remove all unused CSS classes. Before config this plugin the page size was around 177kb.

### Tailwind CSS
This repo use [tailwindcss](https://tailwindcss.com/) as CSS framework and [utility-first](https://critter.blog/2018/06/08/in-defense-of-functional-css/) as architecture. You can find more info about utility-first [here](https://tailwindcss.com/docs/utility-first).

Utility first CSS give us the advantage that we don’t need to write to much CSS what allow us to have an small build size once the unnecessary CSS classes are purged.

### Icons
Given the site simplicity, I also avoided to import a complex icons libraries and typographies. Use icons libraries like font-awesome didn’t make to much sense in project that only needs two icons. I preferred to just to wrap both icons in their own react components.

I could have worked in a lot of abstraction layers, to make easier to migrate from this two components to a whole icons library, but seemed that the cost to write that abstraction was bigger than the cost of just change two components in the app. Abstract to early can add more complexity than the issues it solves.

### GitHub API
I used the [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) plugin to map my GraphQL queries from the page to the GitHub API.

The project expects the GitHub API token as an environment variable: `GITHUB_TOKEN`

This token is only used by Gatsby to generate the website and should be safe to be published. You can also use a `.env` file for development. 

## Preview
![Preview](/docs/preview.jpg)
