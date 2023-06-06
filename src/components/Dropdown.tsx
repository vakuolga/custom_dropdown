import React, { useEffect, useRef, useState } from 'react'
import { useElementPosition } from '../hooks/useElementPosition'
import { Dropdownrops } from '../interfaces'
import { ContextMenu } from './ContextMenu'

// Контент раскрывается по клику или ховеру.
// Клик внутри контента не закрывает дропдаун.
// Клик снаружи или повторный клик в триггер закрывают активный дропдаун.

const Dropdown = (props: Dropdownrops): JSX.Element => {
  const { title, options, id, setOpen, open } = props
  const [position, setPosition] = useState({})
  const buttonRef = useRef<HTMLButtonElement>(null)

  const complementary: { [key: string]: string } = {
    top: 'bottom',
    left: 'right',
    bottom: 'top',
    right: 'left',
  }
  const BASE_WIDTH = 260
  const getPosition = useElementPosition(buttonRef)

  useEffect(() => {
    const entries = Object.entries(getPosition)
    for (const [key, value] of entries) {
      const prop = complementary[key]
      if (key === 'top') {
        // При выходе инициирующего элемента из вьюпорта дропдаун скрывается,
        if (open === id && value >= window.innerHeight) setOpen(false)
        // а про появлении — отображать снова.
        if (open === id && value < window.innerHeight) setOpen(id)
      }
      // Если места для контекстного меню достаточно,
      if (
        typeof value === 'number' &&
        (value > BASE_WIDTH || value === BASE_WIDTH)
      ) {
        if (key === 'top' || key === 'bottom') {
          setPosition((position) => ({
            ...position,
            [prop]: '2.5rem',
          }))
        } else if (key === 'left' || key === 'right') {
          setPosition((position) => ({
            ...position,
            [prop]: 0,
          }))
        }
      }
    }
    // Обновление нужно только в случае, если меняется getPosition
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPosition])

  return (
    <div
      className="dropdown"
      style={{
        justifyContent: id === 1 || id === 3 ? 'flex-start' : 'flex-end',
        alignItems: id === 3 || id === 4 ? 'flex-end' : 'flex-start',
      }}
    >
      <button
        onClick={() => setOpen(id)}
        onMouseEnter={() => setOpen(id)}
        ref={buttonRef}
      >
        {title}
        {typeof open === 'number' && open === id && (
          <ContextMenu data={options} position={position} setOpen={setOpen} />
        )}
      </button>
    </div>
  )
}

export { Dropdown }
