import React from 'react';
import { useTable} from 'react-table';

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