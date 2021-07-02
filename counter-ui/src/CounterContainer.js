import React,{useState, useEffect} from 'react'
import axios from 'axios'

const CounterContainer = (props) => {
    const [counters, setCounters] = useState([])
    // const [type, setType] = useState('')


    useEffect(()=>{
        axios.get('http://localhost:3050/api/counters')
            .then((response)=>{
                setCounters(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
    
    const addCounter = () => {
        axios.post('http://localhost:3050/api/counters')
            .then((response)=>{
                const result = response.data
                setCounters([...counters, result])
            })
            .catch((err)=>{
                alert(err.message)
            })
    }


    const handleChange = (e, id) => {
        let type;
        if(e.target.name === 'inc'){
            type='inc'
        } else if(e.target.name === 'dec'){
            type='dec'
        } else if(e.target.name === 'reset'){
            type='reset'
        }
        axios.put(`http://localhost:3050/api/counters/${id}?type=${type}`)
            .then((response)=>{
                // console.log(response.data)
                const result = response.data
                const arr = counters.map((ele) => {
                    if(ele._id === result._id){
                        return {...ele, ...result}
                    }
                    else{
                        return {...ele}
                    }
                })
                setCounters(arr)
            })
            .catch((error) => {
                alert(error.message)
            })
    }


    const handleRemove = (id) => {
        axios.delete(`http://localhost:3050/api/counters/${id}`)
            .then((response) => {
                const result = response.data
                const arr = counters.filter((ele) => {
                    return ele._id !== result._id
                })
                setCounters(arr)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div>
            <button onClick={addCounter}>Add counter</button>
            <h1>Listing Counters - {counters.length}</h1>
            {
                counters.map((ele=>{
                    return (
                        <div key={ele._id}>
                            <h1>{ele.count}</h1>
                            <button name="inc" onClick={(e)=>handleChange(e, ele._id)}>increment</button>
                            <button name="dec" onClick={(e)=>handleChange(e, ele._id)}>decrement</button>
                            <button name="reset" onClick={(e)=>handleChange(e, ele._id)}>reset</button>
                            <button onClick={() => handleRemove(ele._id)}>remove</button>
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default CounterContainer
