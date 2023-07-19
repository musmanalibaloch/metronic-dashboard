import {KTIcon} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'

const UsersListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}

      <button type='button' className='btn btn-light-primary me-3'>
        <i className='fa-solid fa-arrows-rotate'></i>
        Refresh
      </button>

      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <i className='fa-solid fa-plus'></i>
        Create new Org
      </button>
    </div>
  )
}

export {UsersListToolbar}
