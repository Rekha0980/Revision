import { DEC, INC } from "./actionTypes"

export const increment=()=>{
  return {
    type:INC
  }
}

export const decrement=()=>{
  return {
    type:DEC
  }
}