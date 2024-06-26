import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AcceptFriendCard from "../../UiComponents/AcceptFriendCard";
import { GetFriendsRequest } from '../../../Store/urls';
import LoadingSpinner from '../../UiComponents/LoadingSpinner';
import socket from '../../../Store/socket';
import useFetch from '../../CustomHooks/useFetch'
const url = GetFriendsRequest();


// eslint-disable-next-line react/prop-types
export default function AcceptSection({ className = "" }) {
  const { data, Loading } = useFetch(url, 'GET');
  const [ friends, setFriends ] = useState([]);
  // console.log(data)
  // const [setData] = useState('No user');
  // const [Loading, setLoading] = useState(true);

  useEffect(()=>{

    socket.on('friend-request-received', (data) => {
      setFriends(data);
    })

    return ()=>{
      socket.off('friend-request-received');
    }

  },[])

  useEffect(()=>{    
    if(data){
      setFriends(data.friends);
    }
  },[data])

  return (
    <div className={`border-r-2 border-background1 pt-5 sm:pl-5 pl-2 ${className}`}>
      <h1 className="text-2xl font-bold mb-10">Accept Friends</h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[calc(100%-0px)] space-y-3 overflow-auto sm:pr-5 pr-2">
        {
          Loading && 
          <div className='flex justify-center items-center'>
            <LoadingSpinner />
          </div>
        }
        {
          !Loading && data &&
          <>
            {friends.length === 0 && <div className='text-center text-lg'>No Friends Request</div>}
            {friends.length !== 0 && 
              friends.map((item) => (
                <AcceptFriendCard key={item._id} id={item._id} Img={item.imgName} Title={item.name} />
              ))
            }
          </>
        }
      </motion.div>
    </div>
  )
}
