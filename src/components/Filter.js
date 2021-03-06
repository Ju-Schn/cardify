import StyledButton from './StyledButton';
import ScreenReaderOnly from './ScreenReaderOnly';

import styled from 'styled-components';

export default function Filter({
  onResetFilter,
  onChange,
  category,
  allCategories,
  onDifficultyCards,
  easyActive,
  mediumActive,
  difficultActive,
}) {
  return (
    <>
      <DropdownWrapper>
        <label htmlFor="categories">
          <ScreenReaderOnly>Kategorieauswahl:</ScreenReaderOnly>
        </label>
        <StyledDropdown
          id="categories"
          onChange={onChange}
          name="categories"
          type="text"
          value={category}
        >
          <option value="">Kategorieauswahl:</option>
          {allCategories?.map(
            category =>
              category && (
                <option key={category} value={category}>
                  {category}
                </option>
              )
          )}
        </StyledDropdown>
        <StyledButton onClick={onResetFilter}>Alle</StyledButton>
      </DropdownWrapper>
      <ButtonWrapper>
        <StyledButton
          name=""
          value=""
          onClick={onDifficultyCards}
          variant={
            !easyActive && !mediumActive && !difficultActive
              ? 'active'
              : 'default'
          }
        >
          Alle
        </StyledButton>
        <StyledButton
          variant={easyActive ? 'submitActive' : 'submit'}
          name="easy"
          value="easy"
          onClick={onDifficultyCards}
        >
          Leicht
        </StyledButton>
        <StyledButton
          variant={mediumActive ? 'yellowActive' : 'yellow'}
          name="medium"
          value="medium"
          onClick={onDifficultyCards}
        >
          Mittel
        </StyledButton>
        <StyledButton
          variant={difficultActive ? 'dangerActive' : 'danger'}
          name="difficult"
          value="difficult"
          onClick={onDifficultyCards}
        >
          Schwer
        </StyledButton>
      </ButtonWrapper>
    </>
  );
}

const DropdownWrapper = styled.section`
  display: flex;
  gap: 8px;
  margin-right: 8px; ;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledDropdown = styled.select`
  background-color: #f2b705;
  font-family: inherit;
  font-size: 100%;
  border: none;
  border-radius: 30px;
  width: 80%;
  box-shadow: rgba(140, 14, 3, 0.4) 0px 8px 24px;
  margin: 8px;
`;
