import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu, Container } from "semantic-ui-react"
const Header = () => (
  <Menu className="fixed">
    <Container className="App">
      <Menu.Item name="header" active={false}>
        Prerendering
      </Menu.Item>
    </Container>
  </Menu>
)

export default Header
