import React from 'react'

const CryptoChild = ({crypto}) => {
    return (
           
        <div className='row'>

            <div className='border shadow p-2 h-100'>

                <div className='col-12 col-md-6 col-lg-4'>
                 <div>  {crypto.name} - {crypto.price_usd}</div>
                 <h3>{crypto.symbol}</h3>
                 
                </div>

            </div>

        </div>
    )
}

export default CryptoChild