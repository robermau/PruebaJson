import React from 'react'
import data from "../data.json"
import "../index.css";


console.log(data)

const Card = () => {


    return (



     data.map( e =>
            <div key={e.id} className='flex justify-center'>
                <div className="pb-8 mb-8 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900 w-80 dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg " src={e.img} alt="" />
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">{e.nombre}</h5>
                    <p className="text-base text-gray-700 dark:text-gray-400">{e.email}</p>



                </div>
            </div>
        )
    )
}

export default Card


