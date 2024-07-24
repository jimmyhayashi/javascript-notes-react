import React, { Fragment, useState, useEffect } from "react";
import { Button, Field, Control, Input, Help, Label } from "rbx";
import { Column } from "rbx";
import UsersService from "../../../services/user";

function UsersEditPassword() {
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [status, setStatus] = useState(null);
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (password == password_confirmation) {
            try {
                await UsersService.updatePassword({ password: password });
                setStatus("success");
            } catch (error) {
                setStatus("error");
            }
        } else {
            setStatus("error_confirmation_password");
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            name="password"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Confirm password</Label>
                        <Input
                            type="password"
                            value={password_confirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            required
                            name="password_confirmation"
                        />  
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Column.Group>
                             <Column className="has-text-right">
                                <Button color="custom-purple">Update password</Button>
                            </Column>
                        </Column.Group> 
                    </Control>
                </Field>

                {status == "error" && (
                    <Help color="danger">
                        Problem in password update
                    </Help>
                )}

                {status == "error_confirmation_password" && (
                    <Help color="danger">
                        Passwords do not match
                    </Help>
                )}

                {status == "success" && (
                    <Help color="success">
                        Password updated successfully!
                    </Help>
                )}
            </form>
        </Fragment>
    );
}

export default UsersEditPassword;