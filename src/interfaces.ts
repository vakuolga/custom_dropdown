export interface Dropdownrops {
  title: string | JSX.Element
  id: number
  options: Option[]
  setOpen: React.Dispatch<React.SetStateAction<boolean | number>>
  open: boolean | number
}

export interface Option {
  id: number
  title: string
  icon: JSX.Element
  selected: boolean
}

export interface ContextMenuProps {
  data: Option[]
  setOpen: React.Dispatch<React.SetStateAction<boolean | number>>
  position: {
    [key: string]: number
  }
}

export interface ElementPosition {
  left: undefined | number
  right: undefined | number
  top: undefined | number
  bottom: undefined | number
}
