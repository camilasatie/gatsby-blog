import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: left;
    align-items: baseline;
  }
`

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`

export const PostItemTag = styled.span`
  background: ${props => (props.background ? props.background : "#b1b1b1")};
  color: #fff;
  font-size: 1.125rem;
  font-weight: regular;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  display: block;
  font-size: 0.9rem;
  line-height: 2;
  margin-top: 1rem;
`

export const PostItemTitle = styled.h1`
  font-family: "Roboto Slab";
  font-size: 1.6rem;
  font-weight: normal;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-family: "Roboto";
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
