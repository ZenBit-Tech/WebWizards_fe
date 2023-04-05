import styled from 'styled-components';
import { StylesConstantsColor } from 'components/RegistrationForm2/constants/styles';
import { SignInButtonProps } from 'components/RegistrationForm2/types';
import { Link } from 'react-router-dom';
import 'typeface-roboto';

export const RegForm2Container = styled.form`
  display: flex;
  height: 90vh;
  width: 35vw;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 auto;
  padding: 5em;
  gap: 0.5em;
  background: ${StylesConstantsColor.COLOR_GHOST_WHITE};
  border: 1px solid ${StylesConstantsColor.COLOR_GHOST_WHISPER};
  box-shadow: 0 0 50px ${StylesConstantsColor.COLOR_GHOST_VERY_LIGHT_GREY};
  border-radius: 1em;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  @media only screen and (min-width: 360px) {
    min-width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: ${StylesConstantsColor.FONT_SIZE_LARGE};
  font-weight: 700;
  margin-bottom: 0.5em;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;

export const TitleText = styled.span`
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
  margin-bottom: 0.5em;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;

interface StyledProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledSelect = styled.select<StyledProps>`
  width: 100%;
  height: 4em;
  padding: 5px;
  border-radius: 5px;
  background: ${StylesConstantsColor.RF2_BTN_COLOR};
  border: 1px solid ${StylesConstantsColor.RF2_BOX_COLOR};
  color: ${StylesConstantsColor.INPUTS_FONT_COLOR};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  font-size: ${StylesConstantsColor.FONT_SIZE_SMALL};
`;

export const StyledLabel = styled.div`
  display: flex;
  width: 100%;
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  align-items: left;
  margin-bottom: 1px;
  color: ${StylesConstantsColor.COLOR_GHOST_ZAMBEZI};
`;

export const StyledInput = styled.input`
  border-radius: 1px;
  background: white;
  border-radius: 5px;
  height: 4em;
  padding: 5px;
  border: 1px solid ${StylesConstantsColor.RF2_BOX_COLOR};
  color: ${StylesConstantsColor.INPUTS_FONT_COLOR};
  width: 100%;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  font-size: ${StylesConstantsColor.FONT_SIZE_SMALL};
`;

export const InputInlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  width: 100%;
`;
export const InlineContainerRow = styled.div`
  display: flex;
  width: 50%;
  margin: 5px;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  width: 100%;
`;
export const StyledButton = styled.button<SignInButtonProps>`
  background: ${StylesConstantsColor.BUTTON_BG_COLOR};
  border-radius: 8px;
  width: 50%;
  height: 2rem;
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
  color: ${StylesConstantsColor.RF2_BTN_COLOR};
  :disabled {
    background: ${StylesConstantsColor.COLOR_PINK_SWAN}; 
    color: ${StylesConstantsColor.COLOR_GHOST_WHITE};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  font-size: ${StylesConstantsColor.FONT_SIZE_SMALL};
  color: ${StylesConstantsColor.ERROR_COLOR};
`;

export const LinkContainer = styled(Link)`
  font-weight: bold;
  color: black;
  font-size:${StylesConstantsColor.FONT_SIZE_MEDIUM};
  font-family:${StylesConstantsColor.GLOBAL_FONT};
  }
`;

export const SignUpContainer = styled.span`
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;
