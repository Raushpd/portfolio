import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCards";
import deloitteImg from "../../Assets/exp/deloitte.png";
import koachImg from "../../Assets/exp/koach.jpg";
import upjaoImg from "../../Assets/exp/upjao.png";
import skywindsImg from "../../Assets/exp/skywinds.jpg";

function Experience() {
    return (
        <Container fluid className="exp-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Experience</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few roles and organizations I have worked with recently.
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col xl={3} lg={4} md={6} sm={12} className="project-card">
                        <ExperienceCard
                            imgPath={deloitteImg}
                            title="Deloitte"
                            duration="Sept 2024 - Present"
                            description={[
                                "Worked on a high-profile Deloitte project for Canada Post, enhancing core Shipping Systems and Mobile Web applications using Angular, TypeScript, and Java.",
                                "Improved performance and user experience of mobile platforms, contributing to greater operational efficiency and customer satisfaction.",
                                "Delivered US De-Minimus in 2 weeks, resulting in retaining 20% of the shipment going from Canada to the USA, resulting in securing $10 Million.",
                                "Fixed various vulnerabilities and security updates for the key application Snapship of Canada Post, increasing code coverage by 37%.",
                                "Helped reduce applicable user tax from 15% to 14% by implementing optimized tax logic and streamlined system workflows.",
                                "Contributed to Canada Post’s sustainability efforts by supporting initiatives aimed at achieving carbon neutrality through eco-conscious development practices.",
                                "Enhanced pricing transparency across the platform, resulting in a 10% reduction in legal expenses by mitigating disputes and improving compliance clarity.",
                                "Tech Stack : Angular, TypeScript, JavaScript, MySQL, HTML, CSS",
                            ]}
                            companyLink="https://www2.deloitte.com"
                        />
                    </Col>

                    <Col xl={3} lg={4} md={6} sm={12} className="project-card">
                        <ExperienceCard
                            title="Koach AI"
                            imgPath={koachImg}
                            duration="August 2022 - July 2024"
                            description={[
                                "Developed and launched a mobile app tailored for both B2B and B2C markets, significantly enhancing user experience and achieving over 5K+ downloads on Google Play Store and the Apple App Store.",
                                "Reduced administrative tasks by 30% through the creation of a new admin website and enhanced the company's website visibility and accessibility by implementing effective SEO strategies.",
                                "Implemented Google Analytics to provide in-depth insights into user behavior, integrated Google Authentication for secure and seamless user login, and set up a payment gateway to facilitate efficient online transactions.",
                                "Tech Stack : Angular, TypeScript, JavaScript, Ionic, Cordova, Capacitor, NodeJs, MySQL, AWS S3, HTML, CSS",
                            ]}
                            companyLink="https://koach.ai"
                        />
                    </Col>

                    <Col xl={3} lg={4} md={6} sm={12} className="project-card">
                        <ExperienceCard
                            title="Skywinds Solutions"
                            imgPath={skywindsImg}
                            duration="Feb 2022 – July 2022"
                            description={[
                                "Build dashboards for various companies, streamlining data visualization and enhancing business decision-making.",
                                " Utilized React Material components to design and implement a wide range of services, ensuring a responsive and intuitive user interface.",
                                "Implemented Google Analytics to provide in-depth insights into user behavior, integrated Google Authentication for secure and seamless user login, and set up a payment gateway to facilitate efficient online transactions.",
                                "Tech Stack : Angular, TypeScript, JavaScript, Ionic, Cordova, Capacitor, NodeJs, MySQL, AWS S3, HTML, CSS",
                            ]}
                            companyLink="https://upjao.com"
                        />
                    </Col>

                    <Col xl={3} lg={4} md={6} sm={12} className="project-card">
                        <ExperienceCard
                            title="Upjao.ai"
                            imgPath={upjaoImg}
                            duration="Nov 2021 – Feb 2022"
                            description={[
                                "Created an interactive map to display product data, integrating it with both the Client and Admin Portals.",
                                "Leveraged Firebase to implement secure data storage and authentication mechanisms within the Upjao app, providing a robust framework for managing user data and ensuring high standards of security and reliability",
                                "Achieved over 500+ downloads for the app on the Google Play Store, strong user interest and engagement.",
                                "Streamlined administrative operations by 25% through the development of a highly efficient admin website, significantly enhancing operational productivity",
                                "Tech Stack : ReactJS, JavaScript, NodeJS, Firebase, MySQL, HTML, CSS.",
                            ]}
                            companyLink="https://upjao.com"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Experience;
