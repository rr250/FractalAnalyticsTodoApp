import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDo App In React</h1>
        </header>
    )
}
const headerStyle = {
    fontFamily: 'sans-serif',
    color: '#595959',
    fontSize: '24px',
    textAlign: 'center',
    padding: '30px',
}

export default Header;