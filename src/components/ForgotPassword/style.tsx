import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StylesConstantsColor } from 'components/ForgotPassword/constants';

export const ForgotPasswordContainer = styled.form`
  display: flex;
  height: 50vh;
  width: 35vw;
  align-items: center;
  justify-content: space-around;
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

interface StyledProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledSelect = styled.select<StyledProps>`
  width: 100%;
  height: 2em;
  border-radius: 5px;
  background: white;
  border: 1px solid ${StylesConstantsColor.RF2_BOX_COLOR};
  padding: 5px;
  color: ${StylesConstantsColor.INPUTS_FONT_COLOR};
  font-size: 0.8rem;
  margin: 5px;
`;

export const StyledLabel = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.8em;
  align-items: left;
  color: ${StylesConstantsColor.LABEL_COLOR};
`;

export const StyledInput = styled.input`
  border-radius: 1px;
  background: white;
  border-radius: 5px;
  border: 1px solid ${StylesConstantsColor.RF2_BOX_COLOR};
  color: ${StylesConstantsColor.INPUTS_FONT_COLOR};
  width: 100%;
  height: 1em;
  padding: 0.8rem;
  font-size: 0.8rem;
  margin: 5px;
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
  width: 100%;
`;
export const StyledButton = styled.button<any>`
  background: ${StylesConstantsColor.BUTTON_BG_COLOR};
  border-radius: 8px;
  width: 50%;
  height: 2rem;
  color: ${StylesConstantsColor.RF2_BTN_COLOR};
  disabled: ${(props) => (props.status ? 'true' : 'false')};
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
`;

export const LinkContainer = styled(Link)`
  font-weight: bold;
  color: black;
  @media only screen and (min-width: 360px) {
    min-width: 360px;
    font-size: 0.8em;
  }
`;
