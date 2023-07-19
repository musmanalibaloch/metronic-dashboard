// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './EmployeeInfoCell'
import {UserLastLoginCell} from './EmployeeLastLoginCell'
import {UserTwoStepsCell} from './EmployeeTwoStepsCell'
import {UserActionsCell} from './EmployeeActionsCell'
import {UserSelectionCell} from './EmployeeSelectionCell'
import {UserCustomHeader} from './EmployeeCustomHeader'
import {UserSelectionHeader} from './EmployeeSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    id: 'id',
    Cell: ({...props}) => props.data[props.row.index].id,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='First Name' className='min-w-125px' />
    ),
    id: 'firstname',
    Cell: ({...props}) => props.data[props.row.index].firstname,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Last Name' className='min-w-125px' />
    ),
    id: 'lastname',
    Cell: ({...props}) => props.data[props.row.index].lastname,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Title' className='min-w-125px' />
    ),
    id: 'title',
    Cell: ({...props}) => props.data[props.row.index].title,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Age' className='min-w-125px' />,
    id: 'age',
    Cell: ({...props}) => props.data[props.row.index].age,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Skills' className='min-w-125px' />
    ),
    id: 'skills',
    Cell: ({...props}) => props.data[props.row.index].skills,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
