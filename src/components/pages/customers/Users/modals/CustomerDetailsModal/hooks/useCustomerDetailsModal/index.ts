import { useState } from 'react'
import { IOpenUserDetails } from '../../types'
import { ICustomer } from '@services/types/Customer'
import { makeInitialCustomer } from './utils'
import { postCustomer } from '@services/api/routes/customers/postCustomer'
import { useErrorModalContext } from '@contexts/useErrorModalContext'
import { putCustomer } from '@services/api/routes/customers/putCustomer'

export function useCustomerDetailsModal(onSuccess: () => void) {
  // States
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [customerDetailsForm, setCustomerDetailsForm] =
    useState<ICustomer>(makeInitialCustomer)

  // Hooks
  const { openErrorModal } = useErrorModalContext()

  // Ref
  function handleCustomerFormChange(key: keyof ICustomer, value: any) {
    setCustomerDetailsForm(prev => ({ ...prev, [key]: value }))
  }

  function handleRefMethods() {
    return { open: handleOpen, close: handleClose }
  }

  async function createCustomer() {
    try {
      setLoading(true)
      await postCustomer(customerDetailsForm)
      await onSuccess()
      handleClose()
    } catch (e) {
      console.log('[createCustomer]: ', e)
      openErrorModal({ error: e })
    } finally {
      setLoading(false)
    }
  }

  async function updateCustomer() {
    try {
      setLoading(true)
      await putCustomer(customerDetailsForm.id, customerDetailsForm)
      await onSuccess()
      handleClose()
    } catch (e) {
      console.log('[createCustomer]: ', e)
      openErrorModal({ error: e })
    } finally {
      setLoading(false)
    }
  }

  async function handleConfirmClick() {
    if (isCreating) await createCustomer()
    else await updateCustomer()
  }

  function handleOpen({ customer, isCreating }: IOpenUserDetails) {
    if (customer) setCustomerDetailsForm(customer)
    setIsCreating(isCreating)
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
    setCustomerDetailsForm(makeInitialCustomer)
  }

  return {
    isOpen,
    isCreating,
    customerDetailsForm,
    loading,
    handleConfirmClick,
    handleCustomerFormChange,
    handleRefMethods,
    handleClose
  }
}
