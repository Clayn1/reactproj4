import React, {useState} from 'react';

function Title({user,onClick}) {
    const [bg, setBg] = useState('yellow');
    const setBlue = () => {
        setBg('blue')
    };
    const handler = () => {
        onClick.show(user);
        onClick.to(setTimeout(() => {
            setBg("blue")
        },2000))
    };
    return (
        <div style={{backgroundColor: bg, marginBottom: "3.5rem"}}
             onClick={handler}
             onDoubleClick= {setBlue}>{user.username}</div>
    );
}

export default Title;