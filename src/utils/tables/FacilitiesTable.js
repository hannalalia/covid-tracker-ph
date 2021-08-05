import React from 'react';
import {useTable, usePagination,useGlobalFilter, useSortBy} from 'react-table';
import {Table, Form, Button, Row, Col} from 'react-bootstrap';
import { MdExpandMore,MdExpandLess } from "react-icons/md";
import {CSVLink} from 'react-csv'
function FacilitiesTable({data,columns,csvHeaders,csvData}) {
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
          <Row className="justify-content-between my-3">
            <Col md={5} xl={3} className="mb-3">
              <Form.Control as="select" className="shadow-none col-1"
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}>   
                {[10, 25, 50, 100].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </Form.Control> 
            </Col>
            <Col md={5} xl={3}>
              <Form.Control className="shadow-none col-1" type = "text" placeholder="Search (e.g. Facility/Location)" value={globalFilter||''} 
                onChange={e=> setGlobalFilter(e.target.value)}>
              </Form.Control>
            </Col>       
          </Row>
        
        <Table responsive striped bordered hover size="sm" {...getTableProps()}>
          <thead className="">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                    {column.render('Header')}
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
                <tr {...row.getRowProps()} className="text-uppercase">
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
                <CSVLink filename={"facilities.csv"}data={csvData} headers={csvHeaders} className="btn btn-primary btn-sm shadow-none mx-2">Export CSV</CSVLink>
            </div>                    
       </div>
      )
    }

export default FacilitiesTable
