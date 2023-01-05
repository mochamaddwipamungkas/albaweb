import React from "react";
import "./Profil.css"

export default function Profil(props) {
    return (
        <div>
            <h1>Halman Profil </h1>
            <p>Hallo {props.email}</p>
            <p>Token: {props.token}</p>
        </div>
    )
}