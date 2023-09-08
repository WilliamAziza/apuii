import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Functional = () => {
    let mykeys = []
    const [keys, setKeys] = useState(mykeys)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users ')
        .then((res)=>{
            console.log (res)
            setKeys(res.data)
        })
        .catch ((err)=> console.log (err))
    })    
    return (
        <div>
            <h1>keys</h1>
            <hr />
            <div>
            {keys.map((key)=>(
                <div>
                <p>{key.username}</p>
                <p>{key.website}</p>
                <p>{key.id}</p>
                <hr />
                </div>
                
                
            ))}
            </div>
        </div>
    ); 
}

export default Functional;
