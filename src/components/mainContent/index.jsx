import {MainContentWrapper} from "./styles";
import AboutMe from "../AboutMe";
import Resume from "../Resume";
import {Route, Switch} from "react-router-dom";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

function MainContent() {
    return (
        <MainContentWrapper>
            <Switch>
                <Route path={"/"} exact>
                    <AboutMe/>
                </Route>
                <Route path={"/resume"}>
                    <Resume/>
                </Route>
                <Route path={"/portfolio"}>
                    <Portfolio/>
                </Route>
                <Route path={"/contact"}>
                    <Contact/>
                </Route>
            </Switch>
        </MainContentWrapper>
    )
}

export default MainContent
