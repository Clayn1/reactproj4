import React, {useState} from 'react';

function Title({user,onClick}) {
    const [bg, setBg] = useState('yellow');
    const setBlue = () => {
        setBg('blue')
    };
    const startTimeout = () => {
        setTimeout(() => {
            setBg("blue")
        },2000)
    };
    const handler = () => {
        onClick(user);
        startTimeout()
    };
    return (
        <div style={{backgroundColor: bg, marginBottom: "3.5rem"}}
             onClick={handler}
             onDoubleClick= {setBlue}>{user.username}</div>
    );
}

export default Title;