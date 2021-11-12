import React, { useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { Columns } from './Columns';
import './css/Table.css';

function Table(props) {

  const contacts = props.contacts;
  const [showElement, setShowElement] = useState(false);
  const handleClick = () => { setShowElement(!showElement) };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns
  } = useTable({
    columns: Columns,
    data: contacts,
    initialState: {
      hiddenColumns: Columns.map(column => {
        if (column.show === false) return column.accessor;
      }),
    },
  },
  useSortBy
  );

  return (
    <>
      <div className="contacts-list">
        <table {...getTableProps()} className="contacts-list__table table-list" >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className={'align-' + column.alignment}>
                    {column.render('Header')}
                    {column.isSorted ? (column.isSortedDesc ? <i className="fas fa-arrow-up"></i> : <i className="fas fa-arrow-down"></i>) : ''}
                  </th>
                ))}
                <th className={showElement ? 'contacts-list__filters active' : 'contacts-list__filters'} >
                  <i className="fas fa-list" onClick={handleClick} ></i>
                  <ul className={showElement ? 'contacts-list__toggle-filters visible' : 'contacts-list__toggle-filters'}>
                  {allColumns.map((column) => {
                    if (column.colToggle) {
                      return (
                        <li key={column.id}>
                          <label>
                            <input type="checkbox" {...column.getToggleHiddenProps()} />
                            {column.Header}
                          </label>
                        </li>
                      )
                    }
                  })}
                  </ul>                    
                </th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className={showElement ? 'overlay-visible' : ''}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} id={row.original.id} className={row.original.id === '5da45211e8f6549a53095f00' ? 'active-row' : ''}>
                {row.cells.map((cell) => {
                  if (cell.column.id === 'isActive') {
                    return <td {...cell.getCellProps()} className={'align-' + cell.column.alignment} ><i className={cell.value ? 'fas fa-eye' : 'fas fa-eye-slash' }></i></td>
                  } else {
                    return <td {...cell.getCellProps()} className={'align-' + cell.column.alignment} >{cell.render('Cell')}</td>
                  }              
                })}
                <td></td>
              </tr>
            )
          })}        
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
