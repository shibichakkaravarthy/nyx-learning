import {useState, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {
    RootContainer,
    LoginContainer,
    PageSwitchContainer,
    PageSwitch,
    FormContainer,
    TextInputContainer,
    TextInputLabel,
    TextInput,
    RoleSwitchWrapper,
    RoleSwitchLabel,
    RoleSwitchContainer,
    RoleText,
} from './Login.styles';
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import {toast} from 'react-toastify';
import {authActions} from 'modules/auth';
import {ButtonWithLoader} from 'components';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const dispatch=useDispatch()
    const authState = useSelector(state => state.authReducer, shallowEqual);
    const [showLogin, setShowLogin] = useState(true)
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState("STUDENT");

    const onLogin = () => {
        dispatch(authActions.signinAsyncActions.request({emailId, password}))
    }

    const onSignup = () => {
        if(password === confirmPassword) {
            dispatch(authActions.signupAsyncActions.request({emailId, password, role}))
            return;
        }
        toast.error('Password and Cnfirm Password Doesn\'t match', {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
            hideProgressBar: true,
		});

    }

    const handleToggle = evt => {
        if(evt.target.checked) {
            setRole("FACULTY")
            return;
        }
        setRole("STUDENT");
    }

    useEffect(() => {
        console.log("AUTHSTATE CHANGES", authState)
        if(authState.isSuccess && authState.refreshToken) {
            authState.newUser
            ?
            history.push("/profile")
            :
            history.push("/home")
        }
    }, [authState])
    
    return (
        <RootContainer>
            <LoginContainer>
                <PageSwitchContainer>
                    <PageSwitch focused={showLogin} onClick={() => setShowLogin(true)} >Login</PageSwitch>
                    <PageSwitch focused={!showLogin} onClick={() => setShowLogin(false)} >Register</PageSwitch>
                </PageSwitchContainer>
                {
                    showLogin
                    ?
                    <FormContainer>
                        <TextInputContainer>
                            <TextInputLabel>Email</TextInputLabel>
                            <TextInput placeholder="Email" onChange={evt => setEmailId(evt.target.value)} />
                        </TextInputContainer>
                        <TextInputContainer>
                            <TextInputLabel>Password</TextInputLabel>
                            <TextInput placeholder="Password" onChange={evt => setPassword(evt.target.value)} />
                        </TextInputContainer>
                        <ButtonWithLoader text="Signin" isLoading={authState.isLoading} onClick={onLogin} />
                    </FormContainer>
                    :
                    <FormContainer>
                        <RoleSwitchWrapper>
                            <RoleSwitchLabel>I'm a...</RoleSwitchLabel>
                            <RoleSwitchContainer>
                                <RoleText>Student</RoleText>
                                <Toggle
                                    icons={false}
                                    id='cheese-status'
                                    defaultChecked={false}
                                    onChange={handleToggle} 
                                />
                                <RoleText>Tutor</RoleText>
                            </RoleSwitchContainer>
                        </RoleSwitchWrapper>
                        <TextInputContainer>
                            <TextInputLabel>Email</TextInputLabel>
                            <TextInput placeholder="Email" onChange={evt => setEmailId(evt.target.value)} />
                        </TextInputContainer>
                        <TextInputContainer>
                            <TextInputLabel>Password</TextInputLabel>
                            <TextInput placeholder="Password" onChange={evt => setPassword(evt.target.value)} />
                        </TextInputContainer>
                        <TextInputContainer>
                            <TextInputLabel>Confirm Password</TextInputLabel>
                            <TextInput placeholder="Confirm Password" onChange={evt => setConfirmPassword(evt.target.value)}  />
                        </TextInputContainer>
                        <ButtonWithLoader text="Register" isLoading={authState.isLoading} onClick={onSignup} />
                    </FormContainer>
                }
            </LoginContainer>
        </RootContainer>
    )
}

export default Login;