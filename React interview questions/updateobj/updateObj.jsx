import { useState } from "react"

const UpdateObj=()=>{
  const [data,setData]=useState({
    name:"rekha",age:22
  })
  const handleupdate=()=>{
    // setData({name:"yadav"})
    // or
    setData({...data,name:"yadav"})
  }
  return(
    <div>
      <h3>name:{data.name}</h3>
      <button onClick={handleupdate}>update</button>
    </div>
  )
}
export default UpdateObj