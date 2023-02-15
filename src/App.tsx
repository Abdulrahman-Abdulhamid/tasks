import { Button, Container, Row, Col } from "react-bootstrap";
import React from "react";
import cute_dog from "./img/cute-dog.jpeg";
import "./App.css";

function App(): JSX.Element {
    const logHelloWorldHandler = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <p className="name">Abdulrahman Abdulhamid was here</p>
            </header>
            <section>
                <p>About me</p>
                <p>
                    <strong> Favorite languages</strong>
                </p>
                <ul className="favorite-languages">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>C</li>
                </ul>
                <img
                    src={cute_dog}
                    alt="image of a cute dog"
                    className="dog-img"
                />
                <p className="hello-world">Hello World</p>
                <Button onClick={logHelloWorldHandler}>Log Hello World</Button>

                <Container>
                    <Row>
                        <Col>
                            <div className="col-div">First Col</div>
                        </Col>
                        <Col>
                            <div className="col-div">Second Col</div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default App;
