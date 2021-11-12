/* columns info for React table */
export const Columns = [
  {
    Header: 'ID',
    accessor: 'id',
    show: false,
    alignment: 'left',
    disableSortBy: true,
    disableFilters: true,
    colToggle: false
  },
  {
    Header: 'Name',
    accessor: ns => ns.name + ' ' + ns.city.charAt(0) + '.',
    alignment: 'left',
    colToggle: true
  },
  {
    Header: 'City',
    accessor: 'city',
    alignment: 'left',
    disableSortBy: true,
    colToggle: true
  },
  {
    // Header: 'Active',
    accessor: 'isActive',
    alignment: 'right',
    disableSortBy: true,
    disableFilters: true,
    colToggle: false
  },
  {
    Header: 'Email',
    accessor: 'email',
    alignment: 'left',
    disableSortBy: true,
    disableFilters: true,
    colToggle: true
  },
  {
    Header: 'Phone' ,
    accessor: 'phone',
    alignment: 'right',
    disableSortBy: true,
    disableFilters: true,
    colToggle: true
  }
]