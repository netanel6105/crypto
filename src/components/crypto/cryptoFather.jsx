import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import CryptoChild from './cryptoChild';

const CryptoFather = (props) => {

    const [crypto, setCrypto] = useState([]);
    
    const doApi = async() =>{
        try{
            let url = 'http://fs1.co.il/bus/bitcoin.php'
           const {data} = await axios(url)
            console.log(data);
            setCrypto(data)
        }
        catch(err){
            console.log(err.response);
        }
    }

    useEffect(()=>{
        doApi();
    },[])


return (
    <div className='container-fluid'>
        <div className="container">
            <h1 className='p-2  text-center'>crypto</h1>
            <div className="row">
                {crypto?.map((item,i)=>{
                    return(
                        <CryptoChild key={i} crypto={item}/>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default CryptoFather