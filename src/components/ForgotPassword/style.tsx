import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StylesConstantsColor } from 'components/ForgotPassword/constants';

export const ForgotPasswordContainer = styled.form`
  display: flex;
  height: 60vh;
  width: 35vw;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  padding: 5em;
  background: ${StylesConstantsColor.COLOR_GHOST_WHITE};
  border: 1px solid ${StylesConstantsColor.COLOR_GHOST_WHISPER};
  box-shadow: 0 0 50px ${StylesConstantsColor.COLOR_GHOST_VERY_LIGHT_GREY};
  border-radius: 1em;
  @media only screen and (min-width: 360px) {
    min-width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0.5em;
  font-size: ${StylesConstantsColor.FONT_SIZE_XL};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;

export const TitleText = styled.span`
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
  margin-bottom: 0.5em;
  text-align: center;
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;

export const StyledLabel = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.8em;
  align-items: left;
  color: ${StylesConstantsColor.COLOR_GHOST_ZAMBEZI};
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;

export const StyledInput = styled.input`
  border-radius: 1px;
  background: white;
  border-radius: 5px;
  border: 1px solid ${StylesConstantsColor.FG_PSW_INPUT_COLOR};
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
  color: ${StylesConstantsColor.INPUTS_FONT_COLOR};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  width: 100%;
  height: 3.5em;
  padding: 0.8rem;
  font-size: 0.8rem;
  margin: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 100%;
`;
export const StyledButton = styled.button`
  background: ${StylesConstantsColor.BUTTON_BG_COLOR};
  border-radius: 8px;
  width: 60%;
  height: 3rem;
  font-weight: bold;
  color: ${StylesConstantsColor.RF2_BTN_COLOR};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  font-size: small;
  color: ${StylesConstantsColor.ERROR_COLOR};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
  font-size: ${StylesConstantsColor.FONT_SIZE_MEDIUM};
`;

export const LinkContainer = styled(Link)`
  color: ${StylesConstantsColor.COLOR_LINK};
  font-family: ${StylesConstantsColor.GLOBAL_FONT};
`;
