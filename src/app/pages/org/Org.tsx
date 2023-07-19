import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {UsersListWrapper} from '../../modules/apps/user-management/users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Organizations',
    path: '/org',
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

const Org = () => {
  return (
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Org</PageTitle>
      <UsersListWrapper />
    </>
  )
}

export {Org}
