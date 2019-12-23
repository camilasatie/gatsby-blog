import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#ff98b1">MISC</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de Julho de 2019 • 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          Fundamentos JavaScript antes de aprender React
        </S.PostItemTitle>
        <S.PostItemDescription>
          Na necessidade você pode ir direto para o React sem saber alguns
          conceitos e se complicar ainda mais. Esse post pode te ajudar nisso.
          <S.PostItemLine />
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
