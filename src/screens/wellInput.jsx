import React from 'react';

const WellInputPage = () => {
    return (
        <>
            <h1>
                RSB Torque and Drag V0.1
            </h1>
            <div>
                <h2>Wells Input</h2>
                <form>
                    <input name="name" type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>

    );
};

export default WellInputPage;