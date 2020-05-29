import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header
        name="MyOrgName"
        description="Elit laborum fugiat impedit aut quaerat"
        avatarURL="#"
        url="https://github.com"
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
