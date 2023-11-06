// External Libraries

import { IColumn } from '@components/tables/Table/types'
import { Typography } from '@components/toolkit/Typography'
import theme from '@globals/theme'
import { IconButton } from '@components/buttons/IconButton'
import { DeleteSVG } from '@assets/icons/optionsMenu/Delete'
import { EditSVG } from '@assets/icons/optionsMenu/Edit'
import { ICustomer } from '@services/types/Customer'
import { DocumentModule } from '@utils/maskUtils/modules/document'

export function getTableFields(
  onEdit: (customer: ICustomer) => void,
  onDelete: (id: string) => void
): IColumn[] {
  return [
    {
      field: 'id',
      title: 'ID',
      width: '40px',
      renderValue: v => v as string
    },
    {
      field: 'name',
      title: 'Nome',
      width: '120px'
    },
    {
      field: 'document',
      title: 'Documento',
      width: '120px',
      renderValue: v =>
        v ? DocumentModule.mask(v.toString()) : 'Não cadastrado'
    },
    {
      field: 'email',
      title: 'Email',
      width: '120px',
      renderValue: v => v?.toString() || 'Não cadastrado'
    },
    {
      field: '',
      title: 'Editar',
      width: '40px',
      renderItem: (_, row) => (
        <IconButton
          size="2.25rem"
          icon={<EditSVG />}
          onClick={() => onEdit(row as any as ICustomer)}
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
