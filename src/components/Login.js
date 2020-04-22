import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './Loginform.css'
import fire from '../setting/fire'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    const signup = e => {

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div >
            <MDBContainer>
                <MDBRow className="Loginform">
                    <MDBCol md="9">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <MDBInput label="Your email" group type="email" validate error="wrong"
                                    success="right" name="email" onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput label="Your password" group type="password" name="password" validate onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" onClick={login}>Login</MDBBtn>
                                <MDBBtn color="primary" onClick={signup}>Sign-up</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
// code from >> https://mdbootstrap.com/docs/react/forms/basic/
export default Login;