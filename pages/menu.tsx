import React from 'react'
import MenuItem from '@/components/MenuItem'
import { MenuList } from '@/dummy data/MenuList'

export default function Menu() {
  return (
    <div className='menu'>
      <div className="menuList">
      {MenuList.map((menuItem) => {
        return <MenuItem 
        food={menuItem.food}
        name={menuItem.name}
        time = {menuItem.time}
        comment={menuItem.comment}
        like={menuItem.like}

        price ={menuItem.price} 
        texture={menuItem.texture}
        rating={menuItem.rating}
        
        />
      })}

      </div>
    </div>
  )
}

