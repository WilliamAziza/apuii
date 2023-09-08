import React, {useState, useEffect} from 'react';

const Api = () => {
        let boys =[]
        const [biggie, setbigggie] = useState(boys)

        useEffect(()=>{
            axios.get("")
            .then((res)=>{
                console.log(res)
                setbigggie(res.data)
            })
            .catch((err)=>console.log (err) )
        })
    return (
        <div>
            {boys.map(boy)}
        </div>
    );
}

export default Api;
