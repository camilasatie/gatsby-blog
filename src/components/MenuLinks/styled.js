import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #ff6b8f;
  }
`
export const MenuLinksLink = styled(Link)`
  font-weight: 500;
  color: #3b2c59;
  text-decoration: none;
  transition: color 0.5s;
  line-height: 2.5rem;

  &:hover {
    color: #ff6b8f;
  }
`
