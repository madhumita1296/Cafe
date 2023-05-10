import React from 'react'
import {useParams} from 'react-router-dom'
import MenuJSON from '../Menu.json'

const Details = () => {
  let {menu_id,sub_id}=useParams();
  let subMenu=MenuJSON.Menu.find((data)=> data.id === menu_id);
  console.log('sub',subMenu)
  let single=subMenu.sub_menu.find((data)=> data.sub_id === sub_id)
  console.log("Single menu:",single);

  return (
    <div>
      <img src={single.sub_img} alt='img' width={200} height={100} />
      <h1>{single.sub_name}</h1>
      <h3>{single.price}</h3>
      <p>{single.sub_desc}</p>
    </div>
  )
}

export default Details