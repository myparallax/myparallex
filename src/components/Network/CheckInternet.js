import React from 'react' ; 

function CheckInternet({children}){

    return <>
    
    {navigator.onLine  ? {children} : <div>اینترنت قطع شده است.</div>}
    
    </>
}