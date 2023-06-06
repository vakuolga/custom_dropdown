import React, { RefObject, useCallback, useEffect, useState } from 'react'
import { ElementPosition } from '../interfaces'

export const useElementPosition = (
  ref: RefObject<HTMLDivElement | HTMLButtonElement>
) => {
  const [position, setPosition] = useState<ElementPosition>({
    left: undefined,
    right: undefined,
    top: undefined,
    bottom: undefined,
  })
  const onScroll = useCallback(() => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      setPosition({
        left: rect.left,
        top: rect.top,
        right: window.innerWidth - rect.right,
        bottom: window.innerHeight - rect.bottom,
      })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [ref, onScroll])

  return position
}
