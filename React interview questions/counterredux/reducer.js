import { DEC, INC } from "./actionTypes"

const init={
  count:0,
}

export const reducer=(state=init,action)=>{
  switch(action.type){
    case INC:{
      return{
        ...state,
        count:state.count+1
      }
    }
    case DEC:{
      return{
        ...state,
        count:state.count-1
      }
    }
    default:{
      return state
    }
  }
}