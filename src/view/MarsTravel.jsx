import * as S from './marsTravel.styled';
import { Email } from './Email';

export default function MarsTravel() {
  return (
    <S.Wrap>
      <S.Title>Plan to your Mars trip!</S.Title>
      <Email />
    </S.Wrap>
  );
}
