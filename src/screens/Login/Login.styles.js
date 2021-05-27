import styled from 'styled-components';

export const RootContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255,255,255,0.15);
    width: 30vw;
    height: 85vh;
    box-shadow: -1px 6px 19px 0px rgba(0,0,0,0.74);
    -webkit-box-shadow: -1px 6px 19px 0px rgba(0,0,0,0.74);
    -moz-box-shadow: -1px 6px 19px 0px rgba(0,0,0,0.74);
`;

export const PageSwitchContainer = styled.div`
    display: flex;
`;

export const PageSwitch = styled.h3`
    flex: 1;
    color: ${({theme}) => theme.white};
    text-align: center;
    padding: 10px;
    transition: all 0.3s ease;
    border-bottom: ${props => props.focused?"5px solid #30b7fb":"none"}; 
`;

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

export const RoleSwitchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RoleSwitchLabel = styled.div`
    color: ${({theme}) => theme.white};
    font-weight: bold;
    font-size: 1.2em;
`;

export const RoleSwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RoleText = styled.div`
margin: 5px 10px;
color: ${({theme}) => theme.white};
`;

export const TextInputContainer = styled.div`
    margin: 10px;
`;

export const TextInputLabel = styled.p`
    color: ${({theme}) => theme.white};
    margin: 5px 0px;
`;

export const TextInput = styled.input.attrs({type: "text"})`
    border: none;
    outline: none;
    width: 90%;
    padding: 10px 20px;
    background: ${({theme}) => theme.white};
    border-radius: 5px;
    font-weight: 600;
    color: ${({theme}) => theme.darkGrey};
`;