// External Libraries

import { IColumn } from '@components/tables/Table/types'
import { IconButton } from '@components/buttons/IconButton'
import { DeleteSVG } from '@assets/icons/optionsMenu/Delete'
import { EditSVG } from '@assets/icons/optionsMenu/Edit'
import { IPet } from '@services/types/Pet'

export function getTableFields(
  onEdit: (customer: IPet) => void,
  onDelete: (id: string) => void
): IColumn[] {
  return [
    {
      field: 'id',
      title: 'ID',
      width: '40px',
      renderValue: v => v?.toString()
    },
    {
      field: 'name',
      title: 'Nome',
      width: '120px'
    },
    {
      field: 'customerName',
      title: 'Dono',
      width: '120px'
    },
    {
      field: 'type',
      title: 'Tipo',
      width: '120px',
      renderValue: v => v?.toString() || 'Não informado'
    },
    {
      field: 'breed',
      title: 'Raça',
      width: '120px',
      renderValue: v => v?.toString() || 'Não informado'
    },
    {
      field: '',
      title: 'Editar',
      width: '40px',
      renderItem: (_, row) => (
        <IconButton
          size="2.25rem"
          icon={<EditSVG />}
          onClick={() => onEdit(row as any as IPet)}
        />
      )
    },
    {
      field: '',
      title: 'Deletar',
      width: '40px',
      renderItem: (_, row) => (
        <IconButton
          size="2.25rem"
          icon={<DeleteSVG />}
          onClick={() => onDelete(row.id)}
        />
      )
    }
  ]
}
