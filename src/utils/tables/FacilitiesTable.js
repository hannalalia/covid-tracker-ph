import React from 'react';
import {useTable, usePagination,useGlobalFilter, useSortBy} from 'react-table';
import {Table, Form, Button} from 'react-bootstrap';
import { MdExpandMore,MdExpandLess } from "react-icons/md";

function FacilitiesTable({data,columns}) {
  const tableInstance = useTable({data,columns}, useGlobalFilter,useSortBy,usePagination)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, 
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        state,
        setGlobalFilter
        
      } = tableInstance;
    
      const {globalFilter, pageSize} = state;
      return (
        <div className="container">
          <h1 className="h1 mt-3 text-center">Facilities</h1>
          <div className="row justify-content-between my-3 mx-1">
            <Form.Control as="select" className="w-25 shadow-none"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Form.Control>
          <Form.Control className="w-25 shadow-none" type = "text" placeholder="Search (e.g. Facility/Location)" value={globalFilter||''} 
              onChange={e=> setGlobalFilter(e.target.value)}>
          </Form.Control>
          </div>
        
        <Table responsive striped bordered hover size="sm" {...getTableProps()}>
          <thead className="">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                   <span className="d-inline">
                      {column.canSort? (column.isSorted ? (column.isSortedDesc ? (<MdExpandMore/>): (<MdExpandLess/>)):''):'' }
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {pageCount>0 ? page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            }): <tr className="text-center"><td colSpan="8">No Records Found</td></tr>
            
            }
          </tbody>
        </Table> 
            <div>
                <Button variant="primary shadow-none mx-2" size="sm" onClick={()=>canPreviousPage?previousPage():''} >{'Prev'}</Button>
                <Button variant="primary shadow-none mx-2" size="sm" onClick={()=>canNextPage?nextPage():''} >{'Next'}</Button>
            </div>                    
       </div>
      )
    }

export default FacilitiesTable
