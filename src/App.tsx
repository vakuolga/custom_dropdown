import './App.css'
import React, { useState } from 'react'
import { Menu } from 'react-feather'
import { Dropdown } from './components/Dropdown'
import { pageActions } from './data/pageActions'

function App() {
  const [open, setOpen] = useState<boolean | number>(false)
  const list = Array.from([1, 2, 3, 4])
  return (
    <div className="list-wrapper">
      {list.map((key: number) => {
        return (
          <Dropdown
            key={key}
            id={key}
            options={pageActions}
            title={open === key ? <Menu /> : 'Подробнее'}
            setOpen={setOpen}
            open={open}
          />
        )
      })}
    </div>
  )
}

export default App
