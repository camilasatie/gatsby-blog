import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display:none;
  `}
`

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
export const MenuLinksLink = styled(AniLink)`
  font-weight: 500;
  color: var(--menu);
  text-decoration: none;
  transition: color 0.5s;
  line-height: 2.5rem;

  &:hover {
    color: #ff6b8f;
  }
`
