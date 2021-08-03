import React from "react";
import {Form} from 'react-bootstrap'

function GlobalFilter({filter, setFilter}) {
    return ( 
        <Form.Control className="my-2 col-12 col-sm-3" type = "text" placeholder="Search" value={filter||''} 
            onChange={e=> setFilter(e.target.value)}>
        </Form.Control>

    );
}
 
export default GlobalFilter;