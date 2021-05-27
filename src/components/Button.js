import styled from 'styled-components';
import MoonLoader from 'react-spinners/MoonLoader';

const ButtonContainer = styled.div`
    margin: 0px 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${props => props.background || props.theme.darkGrey};
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: ${props => !props.isLoading?"scale(1.1)":"scale(1)"}
    }
`;

const ButtonText = styled.h4`
    margin: 0px;
    padding: 5px 10px;
    flex: 1;
    color: ${props => props.textColor || props.theme.white};
    text-align: center;
`;

export const SmallButton = styled(ButtonContainer)`
    color: ${props => props.color};
    background-color: ${props => props.background};
    padding: 5px 15px;
`;

export const ButtonWithLoader = ({isLoading, text, background, textColor, onClick}) => {
    return (
        <ButtonContainer isLoading={isLoading} onClick={onClick} >
            {
                isLoading
                ?
                <MoonLoader color={textColor} size={20} />
                :
                <ButtonText>{text}</ButtonText>
            }
        </ButtonContainer>
    )
}