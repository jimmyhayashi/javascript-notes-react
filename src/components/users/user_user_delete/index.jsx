import { useState } from "react";
import { Button } from "rbx";
import UsersService from "../../../services/user";
import { Navigate } from "react-router-dom";

function UserDelete() {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
            await UsersService.delete();
            setRedirectToHome(true);
        }
    };  

    if (redirectToHome) {
        return <Navigate to="/" />;
    }

    return (
        <Button color="danger" onClick={deleteUser}>Delete account</Button>
    );
}

export default UserDelete;

