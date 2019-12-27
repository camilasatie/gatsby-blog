import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/fa-solid/Home"
import { SearchAlt as Search } from "styled-icons/boxicons-regular/SearchAlt"
import { Lightbulb } from "styled-icons/remix-line/Lightbulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { ArrowAltCircleUp } from "styled-icons/fa-regular/ArrowAltCircleUp"
import { ThList as List } from "styled-icons/typicons/ThList"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isLigthMode = theme === "light"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
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
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isLigthMode ? "dark" : "light")
          }}
          className={theme}
        >
          <Lightbulb />
        </S.MenuBarItem>

        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>

        <S.MenuBarItem title="Ir para o topo">
          <ArrowAltCircleUp />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
