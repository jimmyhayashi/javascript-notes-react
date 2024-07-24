import React, { Fragment } from "react";
import HeaderLogged from "../../../components/header_logged";
import { Column, Section, Title, Card, Container } from "rbx";
import "../../../styles/users.scss";
import UsersEditForm from "../../../components/users/user_edit_form";
import UsersEditPassword from "../../../components/users/user_edit_password_form";
import UserDelete from "../../../components/users/user_user_delete";

const EditUserScreen = () => (
    <Fragment>
        <HeaderLogged />
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-centered">
                            Personal information
                        </Title>        
                        <Card>
                            <Card.Content>
                                <UsersEditForm />
                            </Card.Content>
                        </Card>
                    </Column>
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-centered">
                            Change password
                        </Title>
                        <Card>
                            <Card.Content>
                                <UsersEditPassword />
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={4} className="has-text-right">
                        <UserDelete />
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);  

export default EditUserScreen;