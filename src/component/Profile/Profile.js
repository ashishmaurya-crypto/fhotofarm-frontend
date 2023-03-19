import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addName } from './../../redux/actions/index'

export default function Profile() {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.changeName)
  const [name, setName] = useState();
  return (
    <div>
      <p>profile page</p>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => dispatch(addName(name))} className='mt-2'>Saved</button>
      {userName.map((item) => {
        return (
          <p>{item}</p>
        )
      })}
    </div>
  )
}




