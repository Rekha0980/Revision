import React from 'react'

const Searchar = ({value,onChnage,handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={value} placeholder='type recipe' onChange={onChnage}/>
            <input type="submit" value="serach"/>
        </form>
    </div>
  )
}

export default Searchar