import React from "react";
import { useNavigate } from "react-router-dom";
export function Error() {
    let navigate = useNavigate();
    return (
        <>
            <div> the page does not exist, return to main page:</div>
            <button onClick={()=> navigate("/") }>home page</button>
        </>
    )
}