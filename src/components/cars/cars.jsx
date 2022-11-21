import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Car from './car'


const Cars = (props) => {
    const [cars, setCars] = useState([]);
    

    const doApi = async () => {
        try {
            let url = `https://project-yarin.herokuapp.com/cars?perPage=99`
            const { data } = await axios(url)
            console.log(data);
            setCars(data);
        }
        catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        doApi();
    }, [])



    return (
        <div>
            <div style={{background:""}} className="container-fluid">
                <h1 className='disply-3 text-center' >cars</h1>
                <div style={{ color: "blue" }} className='container' >

                    <div className="row">
                        {cars?.map((item, i) =>{
                            return(
                                <Car key={i} car={item}/>
                            )
                        })}
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Cars



