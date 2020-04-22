import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
import fire from '../setting/fire'

const Home = props => {
    const logout = () => {

        fire.auth().signOut();
    }
    return (
        <div>
            
            <Navbar bg="dark" variant="Blue">
                <Nav className="mr-auto">
                <h5> <Nav.Link href="/Main">Home</Nav.Link></h5>
                <h5> <Nav.Link href="/Demacia">Demacia</Nav.Link></h5>
                <h5><Nav.Link href="/Noxus">Noxus</Nav.Link></h5>
                  <h5><Nav.Link href="/Ionia">Ionia</Nav.Link></h5>
                  <h5><Nav.Link href="/Piltover">Piltover</Nav.Link></h5>
                  <h5><Nav.Link href="/Freljord">Freljord</Nav.Link></h5>
                  <h5><Nav.Link href="/Zaun">Zaun</Nav.Link></h5>
                
                </Nav>
                <h5>League of Legends</h5>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>Logout</Button>
                </Form>
            </Navbar>
        </div>
    )
}
// code from >> https://getbootstrap.com/docs/4.0/components/navbar/
export default Home;