import React from "react";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Welcome() {

    const isLoginView = true;

    return (
        <div className="bg-base-200">
            <div>
                {isLoginView ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    )
}