import {MainPageWrapper} from "./styles";
import SideBar from "../../components/sideBar";
import MainContent from "../../components/mainContent";

function MainPage() {
    return(
        <MainPageWrapper>
            <SideBar/>
            <MainContent/>
        </MainPageWrapper>
    )
}

export default MainPage
