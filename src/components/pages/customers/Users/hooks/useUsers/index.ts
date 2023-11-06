import { useErrorModalContext } from '@contexts/useErrorModalContext'
import { useEffect, useRef, useState } from 'react'
import { EnumUsersPage } from '../../types'
import { useRouter } from 'next/router'
import { useGetCustomers } from '@services/api/routes/customers/getCustomers/hook'
import { CustomerDetailsModalMethods } from '../../modals/CustomerDetailsModal/types'
import { ICustomer } from '@services/types/Customer'
import { ActionModalMethods } from '@components/modals/ActionModal/types'
import { deleteCustomer } from '@services/api/routes/customers/deleteCustomer'
import { errorHandler } from '@utils/handlers/errors'

export function useUsers() {
  // States
  const [search, setSearch] = useState('')

  // Hooks
  const { openErrorModal } = useErrorModalContext()
  const { data, error, isValidating, mutate } = useGetCustomers({ q: search })

  // Refs
  const customerDetailsRef = useRef<CustomerDetailsModalMethods>(null)
  const deleteCustomerRef = useRef<ActionModalMethods>(null)
  const idToDelete = useRef('')

  // Functions
  function handleCreateCustomerClick() {
    customerDetailsRef.current.open({ isCreating: true })
  }

  function handleOpenCustomerDetails(customer: ICustomer) {
    customerDetailsRef.current.open({ isCreating: false, customer })
  }

  function handleDeleteClick(id: string) {
    idToDelete.current = id
    deleteCustomerRef.current.open()
  }

  async function handleDeleteCustomer() {
    try {
      await deleteCustomer(idToDelete.current)
      await mutate()
      deleteCustomerRef.current.close()
    } catch (e) {
      console.log('[handleDeleteCustomer]:', e)
      openErrorModal({ error: e })
    }
  }

  // Effects
  useEffect(() => {
    if (error) {
      const formatedError = errorHandler(error)
      openErrorModal({ error: formatedError })
    }
  }, [error])

  return {
    handleSearch: setSearch,
    users: data || [],
    loading: isValidating && !data,
    customerDetailsRef,
    deleteCustomerRef,
    handleOpenCustomerDetails,
    handleCreateCustomerClick,
    reloadList: mutate,
    handleDeleteCustomer,
    handleDeleteClick,
    idToDelete: idToDelete.current
  }
}
