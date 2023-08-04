import React, {useEffect, useState} from 'react';
import Loading from './loading';
import GitHubUsers from './gitHubusers';
const UseEffectAPI=()=>{
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const getUsers = async ()=>{
    try{
      setLoading(false)
      const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
    } catch(error){
      setLoading(false)
      console.log("My error is "+error)
    }
    
  }
  useEffect(() => {
    getUsers()
  },[])

  if(loading){
    return <Loading />
  }
  return(
    <>
      <GitHubUsers users={users} />
    </>
  )
}
export default UseEffectAPI