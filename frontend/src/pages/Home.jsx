import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";
import { UserContext } from "../context/UserContext";

function Home() {
  const {user,setUser} = useContext(UserContext)
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
        <div>
        <p>{user}</p>
          <button onClick={() => setUser("johan")}>Change User</button>
        </div>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MERYEME ELHAJOUJI</strong>
              </h1>
             
              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
