import styled from 'styled-components';
import Select from 'react-dropdown-select'; 

export const RootContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #8e9eab;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,0.25);
    width: 90vw;
    height: 85vh;
    box-shadow: -1px 6px 19px 0px rgba(0,0,0,0.74);
    -webkit-box-shadow: -1px 6px 19px 0px rgba(0,0,0,0.74);
    -moz-box-shadow: -1px 6px 19px 0px rgba(0,0,0,0.74);
`;

export const HeadingContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Heading = styled.h2`
    display: flex;
    align-items: center;
    margin: 0px 10px;
    color: ${({theme}) => theme.darkBlue};
`;

export const BackButton = styled.div`
    padding: 10px;
    cursor: pointer;
`;

export const FormWrapper = styled.div`
    flex: 1;
    display: flex;
`;

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 30px;
`;

export const TextInputContainer = styled.div`
    width: 100%;
    padding: 10px;
`;

export const TextInputLabel = styled.p`
    color: ${({theme}) => theme.darkBlue};
    margin: 5px 0px;
    font-weight: 600;
`;

export const TextInput = styled.input.attrs({type: "text"})`
    border: none;
    outline: none;
    width: 80%;
    padding: 10px 20px;
    background: ${({theme}) => theme.white};
    border-radius: 5px;
    font-weight: 600;
    color: ${({theme}) => theme.darkGrey};
`;

export const AboutTextArea = styled.textarea`
    border: none;
    outline: none;
    width: 80%;
    padding: 10px 20px;
    background: ${({theme}) => theme.white};
    border-radius: 5px;
    font-weight: 600;
    color: ${({theme}) => theme.darkGrey};
`;

export const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center
`;

export const ProfileImageContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    position: relative;
    background: ${({theme}) => theme.white};
`;

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
`;

export const ProfileEditButton = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0px;
    text-align: center;
    font-size: 1em;
    cursor: pointer;
    background-color: rgba(255,255,255,0.7);
    font-weight: 800;
    color: ${({theme}) => theme.darkBlue};
    z-index: 90;
`;

export const StyledSelect = styled(Select)`
    background: #fff;
    border: #fff !important;
    border-radius: 5px !important;
    .react-dropdown-select-clear,
    .react-dropdown-select-dropdown-handle {
    color: ${({theme}) => theme.darkBlue};
    }
    .react-dropdown-select-option {
    border-radius: 5px;
    background-color: rgba(0,0,0,0.3);
    color: ${({theme}) => theme.darkBlue};
    }
    .react-dropdown-select-item {
    color: #fff;
    }
    .react-dropdown-select-input {
    color: ${({theme}) => theme.darkBlue};
    }
    .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: 500px;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-height: 300px;
    overflow: auto;
    z-index: 9;
    background: #fff;
    box-shadow: none;
    color: ${({theme}) => theme.darkBlue};
    }
    .react-dropdown-select-item {
        color: ${({theme}) => theme.darkBlue};
            
        :hover {
            color: ${({theme}) => theme.darkBlue};
        }
    }
    .react-dropdown-select-item.react-dropdown-select-item-selected,
    .react-dropdown-select-item.react-dropdown-select-item-active {
    background: ${({theme}) => theme.darkBlue};
    border-bottom: 1px solid #333;
    color: #fff;
    font-weight: bold;
    }
    .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #ccc;
    }
`;