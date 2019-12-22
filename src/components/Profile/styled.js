import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  color: ##3b2c59;
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: #3b2c59;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #755da4;
  }
`
export const ProfileAuthor = styled.h1`
  font-family: "Roboto Slab";
  font-weight: 300;
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`
export const ProfilePosition = styled.small`
  font-family: "Roboto";
  font-style: normal;
  font-size: 1.2rem;
  font-weight: 300;
  color: #474747;
  display: block;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
