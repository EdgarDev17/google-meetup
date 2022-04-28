import React from 'react';

function Title({label}) {
    return (
        <>
         <h1 className={'font-bold text-5xl'}>{label}</h1>
        </>
    );
}

export default Title;