import React from 'react';
import {useTable, usePagination} from 'react-table';
import {Table, Form} from 'react-bootstrap'

function FacilitiesTable({data,columns}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        pageSize,
        
      } = useTable({
        columns,
        data,
      },
      usePagination)
    
      return (
        <div>
          <Form.Control as="select" className="w-25 shadow-none m-2"
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
        <Table responsive {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>         
       </div>
      )
    }

export default FacilitiesTable
