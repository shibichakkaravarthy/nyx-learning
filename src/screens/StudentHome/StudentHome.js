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
    CourseButtonContainer
} from './StudentHome.styles'
import {ButtonWithLoader, SmallButton} from 'components'

const StudentHome = () => {
    const courseState = useSelector(state => state.courseReducer, shallowEqual);
    const profileState = useSelector(state => state.profileReducer, shallowEqual);
    const state = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogout = () => {
        dispatch(authActions.logoutAction.action())
    }

    const onEditProfile = () => {
        dispatch(profileActions.setEditModeAction.action())
        history.push('/profile')
    }

    useEffect(() => {
        dispatch(courseActions.getEnrolledCoursesAsyncActions.request())
        dispatch(courseActions.getAvailableCoursesAsyncActions.request())
        dispatch(profileActions.getProfileAsyncActions.request())
    }, [dispatch])

    return (
        <RootContainer>
            <Header>
                <Heading>Nyx-Learning</Heading>
            </Header>
            <Body>
                <CoursesSection>
                    <Card>
                        <CardTitle>My Courses</CardTitle>
                        <CourseTileContainer>
                            {
                                courseState && courseState.enrolledCourses.length && courseState.enrolledCourses.map(course => (
                                    <CourseTile>
                                        <CourseTileImage src={`https://robohash.org/${course._id}?size=240x180`} />
                                        <CourseTileTitle>{course.courseId.name}</CourseTileTitle>
                                        <CourseTileSubtitle>{course.courseId.description}</CourseTileSubtitle>
                                        <CourseButtonContainer>
                                            <SmallButton color="white" background="Tomato" >Start Learning</SmallButton>
                                        </CourseButtonContainer>
                                    </CourseTile>
                                ))
                            }
                        </CourseTileContainer>
                    </Card>
                    <Card>
                        <CardTitle>More to Explore</CardTitle>
                        <CourseTileContainer>
                        {
                            courseState && courseState.availableCourses.length && courseState.availableCourses.filter(unEnrolled => !courseState.enrolledCourses.some(enrolledCourses => enrolledCourses.courseId._id === unEnrolled._id)).map(course => (
                                <CourseTile>
                                    <CourseTileImage src={`https://robohash.org/${course._id}?size=240x180`} />
                                    <CourseTileTitle>{course.name}</CourseTileTitle>
                                    <CourseTileSubtitle>{course.description}</CourseTileSubtitle>
                                    <CourseButtonContainer>
                                        <SmallButton color="white" background="green" onClick={() => dispatch(courseActions.enrollAsyncActions.request(course._id))} >Enroll</SmallButton>
                                    </CourseButtonContainer>
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

export default StudentHome;