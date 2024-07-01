import React, { Fragment } from "react";    
import presentationImage from "../../assets/images/presentation.png";
import Header from '../../components/header';
import { Column, Section, Title, Container } from "rbx";
import '../../styles/home.scss';
import { Link } from "react-router-dom";

const HomeScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} className="has-text-white">
                            Create notes easily and access when you wants on the cloud.
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid eligendi libero illum sit tenetur cum maiores voluptatibus fugiat dolorum! 
                        </Title>
                        <br />
                        <Link to="/register" className="button is-outlined is-white is-large">
                            <strong>Register for free now</strong>
                        </Link>
                    </Column>
                    <Column size={6}>
                        <img src={presentationImage} />
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default HomeScreen;