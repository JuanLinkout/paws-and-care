import { useErrorModalContext } from '@contexts/useErrorModalContext'
import { useEffect, useRef, useState } from 'react'
import { PetDetailsModalMethods } from '../../modals/PetDetailsModal/types'
import { ActionModalMethods } from '@components/modals/ActionModal/types'
import { IPet } from '@services/types/Pet'
import { useGetPets } from '@services/api/routes/pets/getPets/hook'
import { deletePet } from '@services/api/routes/pets/deletePet'

export function usePets() {
  // States
  const [search, setSearch] = useState('')

  // Hooks
  const { openErrorModal } = useErrorModalContext()
  const { data, error, isValidating, mutate } = useGetPets({ q: search })

  // Refs
  const detailsRef = useRef<PetDetailsModalMethods>(null)
  const deleteRef = useRef<ActionModalMethods>(null)
  const idToDelete = useRef('')

  // Functions
  function handleCreateClick() {
    detailsRef.current.open({ isCreating: true })
  }

  function handleOpenDetails(pet: IPet) {
    detailsRef.current.open({ isCreating: false, pet })
  }

  function handleDeleteClick(id: string) {
    idToDelete.current = id
    deleteRef.current.open()
  }

  async function handleDeletePets() {
    try {
      await deletePet(idToDelete.current)
      await mutate()
      deleteRef.current.close()
    } catch (e) {
      console.log('[handleDeletePets]:', e)
      openErrorModal({ error: e })
    }
  }

  // Effects
  useEffect(() => {
    if (error) {
      openErrorModal({ error })
    }
  }, [error])

  return {
    handleSearch: setSearch,
    data: data || [],
    loading: isValidating && !data,
    detailsRef,
    deleteRef,
    handleOpenDetails,
    handleCreateClick,
    reloadList: mutate,
    handleDeletePets,
    handleDeleteClick,
    idToDelete: idToDelete.current
  }
}
