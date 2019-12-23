import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemWrapper = styled.section`
  align-items: center;
  padding: 2rem 3rem;
  width: 100%;
`

export const PostItemLink = styled(Link)`
  color: #474747;
  display: flex;
  text-decoration: none;

  &:hover {
    color: #59bac3;
  }
`

export const PostItemTag = styled.span`
  background: ${props => props.background};
  color: #fff;
  font-size: 1.125rem;
  font-weight: regular;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0.3rem;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  line-height: 2;
  margin-top: 1rem;
`

export const PostItemTitle = styled.h1`
  font-family: "Roboto Slab";
  font-size: 1.6rem;
  font-weight: normal;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-family: "Roboto";
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

export const PostItemLine = styled.span`
  display: flex;
  border-top: 1px solid #e0e0e0;
  width: 15rem;
  margin-top: 2rem;
`
