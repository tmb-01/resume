import {
    CategoryText,
    ContentContainer,
    ExternalLinkBox,
    PATextBox,
    PortfolioCard,
    PortfolioCardBox,
    PortfolioWrapper,
    Video,
    VideoBox,
} from "./styles";
import {FullName} from "../mainContent/styles";
import ibsSchoolWebsite from "../../assests/video/ibs school website.mp4"
import visitCard from "../../assests/video/Visit Card for contact section of webpage.mp4"
import spaceAcademy from "../../assests/video/space academy.mp4"
import ibsAdmin from "../../assests/video/ibs-admin.mov"
import spaceAcademyBot from "../../assests/video/space-academy-tgbot.mp4"
import space21Bot from "../../assests/video/space21tgbot.mp4"
import ibsBot from "../../assests/video/ibs-tgbot.mp4"

import {ReactComponent as ExternalLink} from "../../assests/icons/externalLink.svg";


function Portfolio() {

    const portfolios = [
        {
            category: "frontend & backend",
            title: "IBS School website",
            video: ibsSchoolWebsite,
            oneOfThree: false,
            link: "https://ibs-school.uz/"
        }, {
            category: "frontend & backend",
            title: "Admin panel of IBS School",
            video: ibsAdmin,
            oneOfThree: false,
            link: ""
        }, {
            category: "frontend & backend",
            title: "Admin panel of Space Academy",
            video: spaceAcademy,
            oneOfThree: false,
            link: ""
        }, {
            category: "frontend",
            title: "Visit Card for contact us page",
            video: visitCard,
            oneOfThree: false,
            link: "https://space21.io/about-us"
        }, {
            category: "backend",
            title: "Telegram bot for IBS School",
            video: ibsBot,
            oneOfThree: true,
            link: "https://t.me/ibs_school_bot"
        }, {
            category: "backend",
            title: "Telegram bot for Space21",
            video: space21Bot,
            oneOfThree: true,
            link: "https://t.me/Space_Academy_bot"
        }, {
            category: "backend",
            title: "Telegram bot for Space Academy",
            video: spaceAcademyBot,
            oneOfThree: true,
            link: "https://t.me/space21bot"
        },
    ]

    return (
        <ContentContainer>

            <FullName>Portfolio</FullName>

            <PortfolioWrapper>
                {portfolios.map(({category, title, video, link, oneOfThree}) => (
                    <PortfolioCardBox oneOfThree={oneOfThree}>
                        <PortfolioCard>
                            <VideoBox>
                                <PATextBox>
                                    <CategoryText>{category}</CategoryText>
                                    <CategoryText>{title}</CategoryText>
                                </PATextBox>
                                {link !== "" ?
                                    <ExternalLinkBox href={link} target={"_blank"}>
                                        <ExternalLink/>
                                    </ExternalLinkBox> : ""}
                                <Video onMouseOver={(e) => e.target.play()}
                                       onMouseOut={(e) => e.target.pause()}
                                    // poster={ibsLogo}
                                       src={video} loop muted/>
                            </VideoBox>

                            {/*<p>{title}</p>*/}
                        </PortfolioCard>
                    </PortfolioCardBox>
                ))}
            </PortfolioWrapper>

        </ContentContainer>
    )
}

export default Portfolio
