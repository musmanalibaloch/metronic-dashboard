import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {EmployeeListWrapper} from './employee-list/EmployeeList'

const employeeBreadcrumbs: Array<PageLink> = [
  {
    title: 'User Management',
    path: '/apps/user-management/employee',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const EmployeePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='employee'
          element={
            <>
              <PageTitle breadcrumbs={employeeBreadcrumbs}>Employee</PageTitle>
              <EmployeeListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-management/employee' />} />
    </Routes>
  )
}

export default EmployeePage
