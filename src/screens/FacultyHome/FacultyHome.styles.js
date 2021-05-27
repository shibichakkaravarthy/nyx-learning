import styled from 'styled-components';

export const RootContainer = styled.div`
    width: 100vw;
    background-color: ${({theme}) => theme.white};
`;

export const Header = styled.div`
    height: 15vh;
    background-color: ${({theme}) => theme.darkBlue};
    display: flex;
    justify-content: space-around;
`;

export const Heading = styled.h2`
    color: ${({theme}) => theme.white};
`;

export const Body = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.white};
    height: 85vh;
`;

export const CoursesSection = styled.div`
    flex: 3;
    overflow-y: scroll;
`;

export const ProfileSection = styled.div`
    flex: 1;
`;

export const Card = styled.div`
    flex: 1;
    margin: 10px;
    padding: 10px 20px;
    background-color: ${({theme}) => theme.white};
    border-radius: 15px;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.3);
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.h3`
    margin: 10px;
    padding: 0px;
    color: ${({theme}) => theme.darkBlue};
    text-align: center;
`;

export const CourseTileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const CourseTile = styled.div`
	max-width: 240px;
	border-radius: 10px;
	margin: 10px;
	background: #CCC;
	cursor: pointer;
`;

export const CourseTileImage = styled.img`
	width: 240px;
	height: 180px;
`;

export const CourseTileTitle = styled.div`
	margin: 10px;
	color: ${({theme}) => theme.darkBlue};
	font-size: 14px;
	font-weight: bold;
	text-align: left;
`;

export const CourseTileSubtitle = styled.div`
	margin: 5px 10px;
	text-align: left;
	color: ${({theme}) => theme.darkGrey};
	font-size: 12px;
`;

export const CourseButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px;
`;

export const ProfileImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 80px;
`;

export const ProfileTextContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileName = styled.h3`
    margin: 5px;
    color: ${({theme}) => theme.darkBlue};
`;

export const ProfileInstitute = styled.h4`
    margin: 5px;
    color: ${({theme}) => theme.darkBlue};
`;

export const ProfileLocation = styled.h5`
    margin: 5px;
    color: ${({theme}) => theme.darkBlue};
`;

export const ProfileBio = styled.p`
    margin: 5px;
    color: ${({theme}) => theme.darkBlue};
`;

export const ProfileButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
`;

export const TextInputContainer = styled.div`
    margin: 10px;
`;

export const TextInputLabel = styled.p`
    color: ${({theme}) => theme.darkBlue};
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

export const TextArea = styled.textarea`
    border: none;
    outline: none;
    width: 80%;
    padding: 10px 20px;
    background: ${({theme}) => theme.white};
    border-radius: 5px;
    font-weight: 600;
    color: ${({theme}) => theme.darkGrey};
`;

export const ModalContainer = styled.div`
    background: #fff;
`;