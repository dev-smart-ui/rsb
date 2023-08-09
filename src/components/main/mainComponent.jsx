import React from 'react';

const MainComponent = () => {
    const isLogin = localStorage.getItem('token') || ''

    return (
        <div>
            {isLogin && <pre>Token: {isLogin}</pre>}
            Hello main component
        </div>
    );
};

export default MainComponent;