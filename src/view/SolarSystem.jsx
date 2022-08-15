import React, { useState } from 'react';
import BackArrow from '../assets/svg/back_arrow.svg';
import FowardArrow from '../assets/svg/foward_arrow.svg';

import * as S from './SolarSystem.styled';
import planets from '../components/static/planetInfo';

export default function SolarSystem() {
  const [index, setIndex] = useState(1);

  const ClickBack = () => {
    return index === 1 ? setIndex(8) : setIndex(index - 1);
  };

  const ClickFoward = () => {
    return index === 8 ? setIndex(1) : setIndex(index + 1);
  };

  return (
    <S.Wrap>
      {planets
        .filter((data) => data.id === index)
        .map((res) => {
          return (
            <S.DetailWrap key={res.id}>
              <S.ModelWrap>
                <S.ModelDetail>
                  <S.Detail>
                    <S.Title>{res.name}</S.Title>
                    <S.Explain>{res.explain}</S.Explain>
                    <S.InfoWrap>
                      <S.Info>
                        <S.Number>{res.lengthOfYear}</S.Number>
                        <S.Text>EARTH DAYS</S.Text>
                      </S.Info>
                      <S.SubTitle>Length Of Year</S.SubTitle>
                    </S.InfoWrap>
                    <S.InfoWrap>
                      <S.Info>
                        <S.Text>{res.planetType}</S.Text>
                      </S.Info>
                      <S.SubTitle>Type Of Planet</S.SubTitle>
                    </S.InfoWrap>
                  </S.Detail>
                  <S.Next onClick={ClickFoward}>→</S.Next>
                </S.ModelDetail>
                {res.model}
              </S.ModelWrap>

              <S.ModelExplain>
                <S.Icon src={BackArrow} alt="back" onClick={ClickBack} />
                {res.name}
                <S.Icon src={FowardArrow} alt="back" onClick={ClickFoward} />
              </S.ModelExplain>
            </S.DetailWrap>
          );
        })}
    </S.Wrap>
  );
}
