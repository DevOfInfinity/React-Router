import React from "react"

import { useParams } from 'react-router-dom'

export default function Param() {
    const { id } = useParams()
    console.log(id)
    return (
        <div className="Param">
            <h1>Param</h1>
            <h2>Valor: {id}!</h2>
        </div>
    )
}