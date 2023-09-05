import React from 'react';

const MovieTable = (props) => {

    const showProps = () => {
        console.log(props.movies);
    }

    return (
        <>
        <div>
        {showProps()}
            <table>
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

        </>
    );

}

export default MovieTable;