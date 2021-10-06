import {
    ColumnTitle,
    DFlex,
    Half,
    ShortInfoBox,
    ShortInfoKey,
    ShortInfoValue,
    ShortInfoWrapper
} from "./styles";
import Box from "./box";
import {ContentContainer, ContentTitle} from "../mainContent/styles";

function Resume() {

    const education = [
        {
            title: "Information Technology and automation systems in industry",
            organization: "Turin polytechnic University in Tashkent",
            from: 2019,
            to: 0,
            description: "This is University which I am getting more knowledge about IT. I love it"
        }, {
            title: "Online courses",
            organization: "Youtube, Udemy, SoloLearn, w3school and so on",
            from: 2019,
            to: 0,
            description: "Online courses are my best friends. When I've free time I always try to learn new things or enhance my knowledge with them."
        },
        {
            title: "Java Backend",
            organization: "PDP Academy",
            from: 2020,
            to: 2020,
            description: "when I finished frontend development I started to learn backend as well in order in order to be a full-stack developer."
        }, {
            title: "Frontend development",
            organization: "PDP Academy",
            from: 2019,
            to: 2019,
            description: "PDP Academy is a place, where taught me more about web development."
        },
    ]

    const experience = [
        {
            title: "FullStack developer",
            organization: "Space21",
            from: "Nov 2020",
            to: 0,
            description: "<a href='https://space21.io/'>Space21</a> is a company that gave me my first job as a developer. In this company, I made the frontend and backend of the website integrated them, helped others, learned more things, and so on."
        }, {
            title: "FrontEnd teacher",
            organization: "IBS School",
            from: "Mar 2021",
            to: 0,
            description: "When I made my knowledge solid in web development, then I started to teach frontend in <a href='https://ibs-school.uz/'>IBS School</a>. There I taught students of my city Angren. I helped them to master frontend development and find their job as a developer."
        },
    ]

    return (
        <ContentContainer>
            <ContentTitle>Resume</ContentTitle>
            <DFlex>
                <Half>
                    <ColumnTitle>Education</ColumnTitle>
                    <br/>
                    {education.map(({title, organization, from, to, description}) => (
                        <Box title={title} organization={organization} from={from} to={to} description={description}/>
                    ))}
                </Half>
                <Half>
                    <ColumnTitle>Experience</ColumnTitle>
                    <br/>
                    {experience.map(({title, organization, from, to, description}) => (
                        <Box title={title} organization={organization} from={from} to={to} description={description}/>
                    ))}
                </Half>
            </DFlex>
            <br/> <br/>
            <ContentTitle>Skills</ContentTitle>
            <DFlex>
                <Half>
                    <ColumnTitle>FrontEnd</ColumnTitle>
                    <ShortInfoWrapper>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Markup Language
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                HTML/5, Markdown
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Style
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                CSS/3, Sass/Scss, less
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Programming Language
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                JavaScript
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Library/Framework
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                React, jQuery, Bootstrap/3/4
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                React Stack
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                React, React Hooks, React Router, Styled Components, React Bootstrap, Ant Design,
                                Material UI
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Redux
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                Redux, React Redux, Redux Thunk, Redux
                                Promise, Redux Logger and so on
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Api Request
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                axios, fetch
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Version Control
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                git, github, gitlab
                            </ShortInfoValue>
                        </ShortInfoBox>
                    </ShortInfoWrapper>
                </Half>
                <Half>
                    <ColumnTitle>BackEnd</ColumnTitle>
                    <ShortInfoWrapper>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Programming Language
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                Java/8
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Library
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                Spring
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Spring Stack
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                Spring, Spring Boot, Spring Security, Spring MVC
                            </ShortInfoValue>
                        </ShortInfoBox>
                        <ShortInfoBox>
                            <ShortInfoKey>
                                Database
                            </ShortInfoKey><span>:</span>
                            <ShortInfoValue>
                                SQL, PostgreSQL, MySQL
                            </ShortInfoValue>
                        </ShortInfoBox>
                    </ShortInfoWrapper>
                </Half>
            </DFlex>
            {/*<DownloadResumeButton href={logo} download="ibs.png">*/}
            {/*    Download*/}
            {/*</DownloadResumeButton>*/}
        </ContentContainer>
    )
}

export default Resume
