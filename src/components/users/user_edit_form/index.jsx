import { Fragment, useState, useEffect } from "react";
import { Button, Field, Control, Input, Help, Label } from "rbx";
import { Column } from "rbx";
import UsersService from "../../../services/user";
import "../../../styles/users.scss";

function UsersEditForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState(null);

    const initializerUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setEmail(user.email);
        setName(user.name);
    }

    useEffect(() => {
        initializerUser();
    }, []);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UsersService.update({ email: email, name: name });
            setStatus("success");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Full Name</Label>
                        <Input
                            type="text"
                            value={name || ''}
                            onChange={e => setName(e.target.value)}
                            required
                            name="name"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Email</Label>
                        <Input
                            type="email"
                            value={email || ''}
                            onChange={e => setEmail(e.target.value)}
                            required
                            name="email"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button className="buttonUpdate">Update</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status === "error" && (
                    <Help color="danger">Problem in updating user</Help>
                )}
                {status === "success" && (
                    <Help color="success">User updated successfully!</Help>
                )}
            </form>
        </Fragment>
    );  
}

export default UsersEditForm;