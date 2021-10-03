import {
    AvatarImage,
    NavbarWrapper,
    NavBox,
    NavIcon,
    NavText,
    SideBarWrapper,
    SocialMediaIcon,
    SocialMediaWrapper
} from "./styles";

//     images
import avatar from "../../assests/images/Screen Shot 2021-09-20 at 1.06.04 AM.png"

//     icons
import {ReactComponent as UserIcon} from "../../assests/icons/User.svg"
import {ReactComponent as PortfolioIcon} from "../../assests/icons/Work.svg"
import {ReactComponent as ResumeIcon} from "../../assests/icons/Document.svg"
import {ReactComponent as ContactIcon} from "../../assests/icons/Phone.svg"
import {ReactComponent as FacebookIcon} from "../../assests/icons/facebook.svg"
import {ReactComponent as TelegramIcon} from "../../assests/icons/telegram.svg"
import {ReactComponent as InstagramIcon} from "../../assests/icons/instagram.svg"
import {ReactComponent as LinkedInIcon} from "../../assests/icons/linkedin.svg"
import {ReactComponent as GitHubIcon} from "../../assests/icons/github.svg"
import {useLocation} from "react-router-dom";

function SideBar() {

    const navs = [
        {
            Icon: UserIcon,
            text: "About me",
            link: "/"
        }, {
            Icon: ResumeIcon,
            text: "Resume",
            link: "/resume"
        }, {
            Icon: PortfolioIcon,
            text: "portfolio",
            link: "/portfolio"
        }, {
            Icon: ContactIcon,
            text: "contact",
            link: "/contact"
        },
    ]

    const socialMedia = [
        {
            Icon: TelegramIcon,
            name: "Telegram",
            link: "https://t.me/tmb_01"
        }, {
            Icon: InstagramIcon,
            name: "Instagram",
            link: "https://www.instagram.com/maraim_tuxtasunov/"
        }, {
            Icon: FacebookIcon,
            name: "Facebook",
            link: "https://www.facebook.com/maraim.tuxtasunov.9/"
        }, {
            Icon: GitHubIcon,
            name: "GitHub",
            link: "https://github.com/TMB-01"
        }, {
            Icon: LinkedInIcon,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/maraim-tukhtasunov-54471a191/"
        },
    ]

    const location = useLocation();

    console.log(location)

    return (
        <SideBarWrapper>

            <AvatarImage>
                <div>
                    <img src={avatar} alt="avatar"/>
                </div>
            </AvatarImage>

            <div style={{padding: "0 30px"}}>
                <SocialMediaWrapper>
                    {
                        socialMedia.map(({name, Icon, link}, index) => (
                            <SocialMediaIcon title={name} key={index} href={link} target="_blank">
                                <Icon/>
                            </SocialMediaIcon>
                        ))
                    }

                </SocialMediaWrapper>
            </div>
            <NavbarWrapper>
                {navs.map(({Icon, text, link}, index) => (
                    <NavBox active={location.pathname === link} key={index} to={link}>
                        <NavIcon><Icon/></NavIcon>
                        <NavText>{text}</NavText>
                    </NavBox>
                ))}

            </NavbarWrapper>

        </SideBarWrapper>
    )
}

export default SideBar
