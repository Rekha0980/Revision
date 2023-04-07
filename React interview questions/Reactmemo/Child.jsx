import { memo } from "react"

const Child=(props)=>{
  console.log("props",props.sub)
  return(
    <div>child {props.sub}</div>
  )
}
export default memo(Child)