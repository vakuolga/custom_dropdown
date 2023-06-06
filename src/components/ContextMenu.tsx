import React, { useRef } from 'react'
import { useOutsideDetector } from '../hooks/useOutsideDetector'
import { ContextMenuProps, Option } from '../interfaces'

const ContextMenu = (props: ContextMenuProps) => {
  const { data, position, setOpen } = props
  const dropdownRef = useRef<HTMLUListElement>(null)
  const positionOutsidehandler = () => {
    setOpen(false)
  }
  useOutsideDetector(dropdownRef, positionOutsidehandler)

  return (
    <ul className="context-menu" style={position} ref={dropdownRef}>
      {data.map((option: Option) => {
        return (
          <li key={option.id}>
            <button onClick={() => alert(`Вы нажали на ${option.title}`)}>
              {option.title} {option.icon}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export { ContextMenu }
