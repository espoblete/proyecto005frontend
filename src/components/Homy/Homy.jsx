import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserContext from '../../config/contexts/users/UserContext'
import Home from './Home/Home'



export default function Homy() {
  const userCtx = useContext( UserContext )

  const { authStatus, verifyingToken } = userCtx

  const [ loading, setLoading ] = useState( true )

  useEffect( () => {

    const verifyUser = async () => {
      await verifyingToken()
      setLoading( false )
    }
    verifyUser()

  }, [ authStatus, verifyingToken ] )

  if ( loading ) return ( <><Spinner></Spinner></> )
  return (
    <Home></Home>
  )
}