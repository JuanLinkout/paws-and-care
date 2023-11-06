import { CustomersSVG } from '@assets/icons/menu/Customers'
import { PetsSVG } from '@assets/icons/menu/Pets'
import { SchedulesSVG } from '@assets/icons/menu/Schedules'

export const MENU_SECTIONS = [
  {
    title: 'Categorias',
    pageList: [
      {
        icon: CustomersSVG,
        title: 'Clientes',
        key: '/customers',
        default: true
      },
      {
        icon: PetsSVG,
        title: 'Animais',
        key: '/pets'
      }
    ]
  }
]
