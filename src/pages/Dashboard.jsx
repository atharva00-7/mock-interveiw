import React, { useEffect, useState } from 'react';
import {useFirebase} from "../context/Firebase";

const Dashboard = () => {
    const firebase = useFirebase();
    const [questions,setQuestions] = useState('');
    useEffect(()=>{
        getCollection();
    },[])
    const getCollection = async()=>{
        const result = await firebase.getDocumentsOfEntireCollection();
        setQuestions(result);
    }
    console.log(questions);
  return (
    <div>
      DashBoard
    </div>
  )
}

export default Dashboard;
