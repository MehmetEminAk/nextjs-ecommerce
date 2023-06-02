import React from "react";


const handleRequest = (req, res) =>  {
    const deneme = {
        name : "Merhaba",
    }
    return res.status(200).json(deneme);
} 


export default handleRequest;