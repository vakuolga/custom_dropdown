import { Edit, Share2, Trash2 } from 'react-feather'

const pageActions = [
  {
    id: 0,
    title: 'Поделиться в социальных сетях',
    icon: <Share2 />,
    selected: false,
  },
  {
    id: 1,
    title: 'Редактировать страницу',
    icon: <Edit />,
    selected: false,
  },
  {
    id: 2,
    title: 'Удалить страницу',
    icon: <Trash2 />,
    selected: false,
  },
]

export { pageActions }
