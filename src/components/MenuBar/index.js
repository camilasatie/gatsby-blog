import React from "react"

import { Home } from "styled-icons/fa-solid/Home"
import { SearchAlt as Search } from "styled-icons/boxicons-regular/SearchAlt"
import { Lightbulb } from "styled-icons/remix-line/Lightbulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { ArrowAltCircleUp } from "styled-icons/fa-regular/ArrowAltCircleUp"
import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Lightbulb />
      </S.MenuBarItem>

      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>

      <S.MenuBarItem title="Ir para o topo">
        <ArrowAltCircleUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
