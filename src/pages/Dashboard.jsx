import React, { useEffect } from 'react';
import {useFirebase} from "../context/Firebase";

const Dashboard = () => {
    const firebase = useFirebase();
    useEffect(()=>{
        getCollection();
    })
    const getCollection = async()=>{
        await firebase.getDocumentsOfEntireCollection();
    }
  return (
    <div>
      DashBoard
    </div>
  )
}

export default Dashboard;
