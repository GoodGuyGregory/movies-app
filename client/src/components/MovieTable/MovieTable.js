import React,  {useState} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'


const MovieTable = (props) => {

    const [data, setData] = useState(props.movies);



const columns = [{  
    Header: 'Movie',  
    accessor: 'name',
    }   
    ,{  
    Header: 'Time',  
    accessor: 'time' ,
    }
    ,{  
    Header: 'Rating',  
    accessor: 'rating' ,
    }
];


return (
    <div>
        <ReactTable data={props.movies}  columns={columns}  /> 
    </div>
    );


}

export default MovieTable;

