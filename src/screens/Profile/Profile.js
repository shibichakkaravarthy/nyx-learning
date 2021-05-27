import {useState, useEffect} from 'react';
import {
    RootContainer,
    ProfileContainer,
    HeadingContainer,
    Heading,
    BackButton,
    FormWrapper,
    FormContainer,
    TextInputContainer,
    TextInputLabel,
    TextInput,
    ProfileWrapper,
    ProfileImageContainer,
    ProfileImage,
    ProfileEditButton,
    AboutTextArea,
    StyledSelect,
} from './Profile.styles';
import {IoMdArrowRoundBack} from 'react-icons/io'
import languages from './languages.json';
import countries from './countries.json';
import {ButtonWithLoader} from 'components';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {profileActions} from 'modules/profile';

const genderList = [
    {
        name: "Male",
        value: "male"
    },
    {
        name: "Female",
        value: "female"
    },
    {
        name: "Transgender",
        value: "transgender"
    },
    {
        name: "Prefer not to say",
        value: "custom"
    }
]

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const profileState = useSelector(state => state.profileReducer, shallowEqual);
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [alterEmail, setAlterEmail] = useState('')
    const [bio, setBio] = useState('')
    const [institution, setInstitution] = useState('')
    const [city, setCity] = useState('')
    const [hometown, setHomeTown] = useState('')
    const [country, setCountry] = useState('')
    const [languages, setLanguages] = useState([])
    const [gender, setGender] = useState('')

    const onSubmit = () => {
        const profile = {name, phone, alterEmail, bio, institution, city, hometown, country, languages, gender}
        dispatch(profileActions.patchProfileAsyncActions.request(profile))
    }

    useEffect(() => {
        console.log("EDIT MODE CHECK")
        if(profileState && profileState.editMode) {
            setName(profileState.profile.name)
            setPhone(profileState.profile.phone)
            setAlterEmail(profileState.profile.alterEmail)
            setBio(profileState.profile.bio[0])
            setInstitution(profileState.profile.institution)
            setCity(profileState.profile.city)
            setHomeTown(profileState.profile.hometown)
            setCountry(profileState.profile.country)
            setLanguages(profileState.profile.languages)
            setGender(profileState.profile.gender)
        }
    }, [profileState])

    useEffect(() => {
        if(profileState && profileState.isSuccess) {
            console.log("BACK TO HOME")
            history.push('/home')
        }
    }, [profileState])

    useEffect(() => {
        dispatch(profileActions.getProfileAsyncActions.request())
    }, [dispatch])
    return (
        <RootContainer>
            <ProfileContainer>
                <HeadingContainer>
                    <Heading>
                        {
                            currentPage === 2
                            ?
                            <BackButton onClick={() => setCurrentPage(1)} >
                                <IoMdArrowRoundBack />
                            </BackButton>
                            :
                            null
                        }
                        Profile - Part {currentPage}
                    </Heading>
                    {
                        currentPage === 1
                        ?
                        <ButtonWithLoader text="Next" onClick={() => setCurrentPage(2)} />
                        :
                        <ButtonWithLoader text="Save Profile" onClick={onSubmit}  />
                    }
                </HeadingContainer>
                {
                    currentPage === 1
                    ?
                    <FormWrapper>
                        <FormContainer>
                            <ProfileWrapper>
                                <ProfileImageContainer>
                                    <ProfileImage src="https://robohash.org/5?size=200x200" />
                                    <ProfileEditButton>Edit</ProfileEditButton>
                                </ProfileImageContainer>
                            </ProfileWrapper>
                            <TextInputContainer>
                                <TextInputLabel>About</TextInputLabel>
                                <AboutTextArea placeholder="Tell us about yourself" onChange={evt => setBio(evt.target.value)} />
                            </TextInputContainer>
                        </FormContainer>
                        <FormContainer>
                            <TextInputContainer>
                                <TextInputLabel>Name</TextInputLabel>
                                <TextInput placeholder="Name" value={name} onChange={evt => setName(evt.target.value)} />
                            </TextInputContainer>
                            <TextInputContainer>
                                <TextInputLabel>Phone</TextInputLabel>
                                <TextInput placeholder="Phone" onChange={evt => setPhone(evt.target.value)} value={phone} />
                            </TextInputContainer>
                            <TextInputContainer>
                                <TextInputLabel>Secondary Email</TextInputLabel>
                                <TextInput placeholder="Secondary Email" onChange={evt => setAlterEmail(evt.target.value)} value={alterEmail} />
                            </TextInputContainer>
                        </FormContainer>
                    </FormWrapper>
                    :
                    <FormWrapper>
                        <FormContainer>
                            <TextInputContainer>
                                <TextInputLabel>School / Company</TextInputLabel>
                                <TextInput placeholder="School / Company" onChange={evt => setInstitution(evt.target.value)} value={institution} />
                            </TextInputContainer>
                            <TextInputContainer>
                                <TextInputLabel>City</TextInputLabel>
                                <TextInput placeholder="City" onChange={evt => setCity(evt.target.value)} value={city} />
                            </TextInputContainer>
                            <TextInputContainer>
                                <TextInputLabel>Hometown</TextInputLabel>
                                <TextInput placeholder="Hometown" onChange={evt => setHomeTown(evt.target.value)} value={hometown} />
                            </TextInputContainer>
                        </FormContainer>
                        <FormContainer>
                            <TextInputContainer>
                                <TextInputLabel>Country</TextInputLabel>
                                <StyledSelect
                                    options={countries}
                                    labelField="name"
                                    valueField="code"
                                    values={[country]}
                                    onChange={(value) => setCountry(value[0].name)}
                                />
                            </TextInputContainer>
                            <TextInputContainer>
                                <TextInputLabel>Languages Known</TextInputLabel>
                                <StyledSelect
                                    multi
                                    options={countries}
                                    labelField="name"
                                    valueField="code"
                                    values={languages}
                                    onChange={(value) => setLanguages(value)}
                                />
                            </TextInputContainer>
                            <TextInputContainer>
                                <TextInputLabel>Gender</TextInputLabel>
                                <StyledSelect
                                    options={genderList}
                                    labelField="name"
                                    valueField="value"
                                    values={[gender]}
                                    onChange={(value) => setGender(value[0].value)}
                                />
                            </TextInputContainer>
                        </FormContainer>
                    </FormWrapper>
                }
            </ProfileContainer>
        </RootContainer>
    )
}

export default Profile;