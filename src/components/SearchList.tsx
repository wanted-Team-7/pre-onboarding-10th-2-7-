import * as S from '../styles/searchList.style';

const SearchList = () => {
  return (
    <S.searchListContainer>
      <S.recentSearchText>최근 검색어</S.recentSearchText>
      <S.recentSearchItem>
        <S.searchItemText>갑상선</S.searchItemText>
      </S.recentSearchItem>
    </S.searchListContainer>
  );
};

export default SearchList;
