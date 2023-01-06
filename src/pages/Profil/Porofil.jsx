import React from "react";
import "./Profil.css"

export default function Profil(props) {
    return (
        <div className="profils">
            <div className="profilsCard">
                <h1>Halman Profil </h1>
                <p>Email:   {props.getEmail}</p>
                <p>Token:   {props.getTokenChild}</p>
            </div>

        </div>
    )
}