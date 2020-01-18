import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingle } from '../actions/actions'

const Home: React.FC = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <Link to='/details'>Details</Link>
      <button onClick={() => dispatch(fetchSingle('22'))}>Add to count</button>
    </div>
  )
}

export default Home
