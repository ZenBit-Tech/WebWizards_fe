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
  padding: 10px;
  padding-right: 30px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 105.167 61.651' id='ChevronDown'%3E%3Cpath d='M2.868 3.155c3.955-4.046 9.458-4.363 14.291 0l35.434 33.971L88.026 3.155c4.834-4.363 10.347-4.046 14.269 0a10.77 10.77 0 0 1 0 14.643c-3.683 3.791-42.568 40.817-42.568 40.817a9.917 9.917 0 0 1-14.286 0S6.574 21.589 2.874 17.798a10.764 10.764 0 0 1 0-14.643Z' fill='%23595bd4' class='color000000 svgShape'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
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
