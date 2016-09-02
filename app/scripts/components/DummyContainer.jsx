import React from 'react'
import { connect } from 'react-redux'

let DummyContainer = ({ dispatch }) =>{
  return(
    <h1>Hello!!</h1>
  )
}

DummyContainer = connect()( DummyContainer )

export default  DummyContainer
