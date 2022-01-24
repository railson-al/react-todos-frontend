import React from "react";

import * as S from "./styles";
import filter_img from "../../assets/filter.png";

function FilterCard({ title, actived }) {
  return (
    <S.Container actived={actived}>
      <img src={filter_img} alt="Filter" />
      <span>{title}</span>
    </S.Container>
  );
}

export default FilterCard;
