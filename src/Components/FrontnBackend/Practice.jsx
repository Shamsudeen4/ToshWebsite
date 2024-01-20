import React from 'react'

function Practice() {

  return (
    <div>
      <h1>{Add(5,7)}</h1>
    </div>
  )
}

export default Practice

function Add(a,b){
 const add = a +b;
 return add;
}