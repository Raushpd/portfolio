import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCards(props) {
    const [showAll, setShowAll] = useState(false);
    const points = Array.isArray(props.description) ? props.description : [props.description];
    const visiblePoints = showAll ? points : points.slice(0, 2);

    const imageExists = Boolean(props.imgPath);

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {imageExists ? (
                        <img src={props.imgPath} alt={props.title} className="experience-card-image" />
                    ) : (
                        <div className="experience-card-placeholder">
                            <h3>{props.title}</h3>
                        </div>
                    )}
                </div>
                <div className="flip-card-back">
                    <Card className="project-card-view flip-card-back-card">
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text as="div" style={{ textAlign: "justify" }}>
                                <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                                    {visiblePoints.map((point, idx) => (
                                        <li key={idx} style={{ marginBottom: "0.5rem" }}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </Card.Text>
                            {points.length > 2 && (
                                <Button
                                    variant="primary"
                                    onClick={() => setShowAll(!showAll)}
                                    style={{ marginTop: "0.75rem" }}
                                >
                                    {showAll ? "Show Less" : "More"}
                                </Button>
                            )}
                            {props.detailsLink && (
                                <Button
                                    variant="secondary"
                                    href={props.detailsLink}
                                    target="_blank"
                                    style={{ marginTop: "0.75rem", marginLeft: props.detailsLink ? "10px" : "0" }}
                                >
                                    <BsGithub /> &nbsp; Details
                                </Button>
                            )}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCards;
