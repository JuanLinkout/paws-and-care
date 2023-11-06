import { useState } from 'react'
import { IOpenDetailsParams } from '../../types'
import { ICustomer } from '@services/types/Customer'
import { makeInitialPet, mapFormToPet, mapPetToForm } from './utils'
import { useErrorModalContext } from '@contexts/useErrorModalContext'
import { IPet } from '@services/types/Pet'
import { postPet } from '@services/api/routes/pets/postPet'
import { putPet } from '@services/api/routes/pets/putPet'
import { IForm } from './types'
import { useGetCustomers } from '@services/api/routes/customers/getCustomers/hook'
import { mapCustomerToOptionList } from '@utils/mappers/mapCustomerToOption'

export function usePetDetailsModal(onSuccess: () => void) {
  // States
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [form, setForm] = useState<IForm>(makeInitialPet)

  // Hooks
  const { openErrorModal } = useErrorModalContext()
  const { data } = useGetCustomers()

  // Ref
  function handleCustomerFormChange(key: keyof IForm, value: any) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function handleRefMethods() {
    return { open: handleOpen, close: handleClose }
  }

  async function createCustomer() {
    try {
      setLoading(true)
      await postPet(mapFormToPet(form))
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
      await putPet(form.id, mapFormToPet(form))
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

  function handleOpen({ pet, isCreating }: IOpenDetailsParams) {
    if (pet) setForm(mapPetToForm(pet))
    setIsCreating(isCreating)
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
    setForm(makeInitialPet)
  }

  return {
    isOpen,
    isCreating,
    form,
    loading,
    handleConfirmClick,
    handleCustomerFormChange,
    handleRefMethods,
    handleClose,
    customers: mapCustomerToOptionList(data || [])
  }
}
