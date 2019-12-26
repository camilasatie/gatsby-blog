import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  background: #fff;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #fff;
  color: #ff98b1;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    background: #f1f1f1;
  }

  &.previous {
    border-right: 1px solid #e0e0e0;
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
