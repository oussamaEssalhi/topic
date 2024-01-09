import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import { Home } from "./Pages/index";
import {
    Landing,
    LandingBottom,
    BrowseTopic,
    TimeLineSection,
    Contact,
    SectionFrequently,
    Footer,
} from "./Sections/index";
import { Container } from "react-bootstrap";


function App() {
   
    return (
        <div className="App">
            <Landing />
            <LandingBottom />
            <Container>
                <BrowseTopic />
            </Container>
            <TimeLineSection />
            <SectionFrequently />
            <Contact />
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    );
}

export default App;
