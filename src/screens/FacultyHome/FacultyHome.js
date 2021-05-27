import {useState, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {authActions} from 'modules/auth';
import {courseActions} from 'modules/courses';
import {profileActions} from 'modules/profile';
import {
    RootContainer,
    Header,
    Heading,
    Body,
    CoursesSection,
    ProfileSection,
    Card,
    CardTitle,
    CardHeader,
    CourseTileContainer,
    CourseTile,
    CourseTileImage,
    CourseTileTitle,
    CourseTileSubtitle,
    ProfileImageContainer,
    ProfileImage,
    ProfileTextContainer,
    ProfileName,
    ProfileInstitute,
    ProfileLocation,
    ProfileBio,
    ProfileButtonsContainer,
    CourseButtonContainer,
    TextInputContainer,
    TextInputLabel,
    TextInput,
    TextArea,
    ModalContainer
} from './FacultyHome.styles'
import Modal from 'react-modal';
import {ButtonWithLoader, SmallButton} from 'components'

const FacultyHome = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const courseState = useSelector(state => state.courseReducer, shallowEqual);
    const profileState = useSelector(state => state.profileReducer, shallowEqual);
    const [showNewCourseModal, setShowNewCourseModal] = useState(false);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [department, setDepartment] = useState('')
    const [room, setRoom] = useState('')
    const [team, setTeam] = useState('')
    const [waitlistCapacity, setWaitlistCapacity] = useState('')

    const onLogout = () => {
        dispatch(authActions.logoutAction.action())
    }

    const onSubmitNewCourse = () => {
        const newCourse = {name, description, department, room, team, waitlistCapacity};
        dispatch(courseActions.createCourseAsyncActions.request(newCourse))
    }

    const onEditProfile = () => {
        dispatch(profileActions.setEditModeAction.action())
        history.push('/profile')
    }

    useEffect(() => {
        dispatch(courseActions.getCreatedCoursesAsyncActions.request())
        dispatch(profileActions.getProfileAsyncActions.request())
    }, [dispatch])

    console.log("courseReducer", courseState);

    return (
        <RootContainer>
            <Modal isOpen={showNewCourseModal} shouldCloseOnOverlayClick={true} onRequestClose={() => setShowNewCourseModal(false)} >
                <ModalContainer>
                    <TextInputContainer>
                        <TextInputLabel>Course Name</TextInputLabel>
                        <TextInput placeholder="Name" onChange={evt => setName(evt.target.value)} />
                    </TextInputContainer>
                    <TextInputContainer>
                        <TextInputLabel>Course Team</TextInputLabel>
                        <TextInput placeholder="Team" onChange={evt => setTeam(evt.target.value)} />
                    </TextInputContainer>
                    <TextInputContainer>
                        <TextInputLabel>Course Room</TextInputLabel>
                        <TextInput placeholder="Room" onChange={evt => setRoom(evt.target.value)} />
                    </TextInputContainer>
                    <TextInputContainer>
                        <TextInputLabel>Course Department</TextInputLabel>
                        <TextInput placeholder="Department" onChange={evt => setDepartment(evt.target.value)} />
                    </TextInputContainer>
                    <TextInputContainer>
                        <TextInputLabel>Course description</TextInputLabel>
                        <TextArea placeholder="Description" onChange={evt => setDescription(evt.target.value)} />
                    </TextInputContainer>
                    <TextInputContainer>
                        <TextInputLabel>Waitlist Limit</TextInputLabel>
                        <TextInput placeholder="Wailist Limit" onChange={evt => setWaitlistCapacity(evt.target.value)} />
                    </TextInputContainer>
                    <ProfileButtonsContainer>
                        <ButtonWithLoader text="Save" isLoading={false} onClick={onSubmitNewCourse} />
                        <ButtonWithLoader text="Cancel" isLoading={false} />
                    </ProfileButtonsContainer>
                </ModalContainer>
            </Modal>
            <Header>
                <Heading>Nyx-Learning Tutor</Heading>
            </Header>
            <Body>
                <CoursesSection>
                    <Card>
                        <CardHeader>
                            <CardTitle>My Courses</CardTitle>
                            <SmallButton color="white" background="green" onClick={() => setShowNewCourseModal(true)} >New</SmallButton>
                        </CardHeader>
                        <CourseTileContainer>
                            {
                                courseState && courseState.myCourses.length && courseState.myCourses.map(course => (
                                    <CourseTile>
                                        <CourseTileImage src={`https://robohash.org/${course._id}?size=240x180`} />
                                        <CourseTileTitle>{course.name}</CourseTileTitle>
                                        <CourseTileSubtitle>{course.description}</CourseTileSubtitle>
                                    </CourseTile>
                                ))
                            }
                        </CourseTileContainer>
                    </Card>
                </CoursesSection>
                <ProfileSection>
                    <Card>
                    <CardTitle>Profile</CardTitle>
                    <ProfileImageContainer>
                        <ProfileImage src="https://robohash.org/5?size=150x150" />
                    </ProfileImageContainer>
                    <ProfileTextContainer>
                        <ProfileName>{profileState.profile.name}</ProfileName>
                        <ProfileInstitute>{profileState.profile.institution}</ProfileInstitute>
                        <ProfileLocation>{profileState.profile.city}, {profileState.profile.state}</ProfileLocation>
                        <ProfileBio>
                            {profileState.profile.bio}
                        </ProfileBio>
                    </ProfileTextContainer>
                    <ProfileButtonsContainer>
                        <ButtonWithLoader text="Logout" isLoading={false} onClick={onLogout} />
                        <ButtonWithLoader text="Edit Profile" isLoading={false} onClick={onEditProfile} />
                    </ProfileButtonsContainer>
                    </Card>
                </ProfileSection>
            </Body>
        </RootContainer>
    )
}

export default FacultyHome;