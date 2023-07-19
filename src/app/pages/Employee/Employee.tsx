import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {EmployeeListWrapper} from '../../modules/employee/employee-list/EmployeeList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Organizations',
    path: '/employee',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'abc',
    path: '/org',
    isSeparator: true,
    isActive: false,
  },
]

const Employee = () => {
  return (
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Employee</PageTitle>
      <EmployeeListWrapper />
    </>
  )
}

export {Employee}
