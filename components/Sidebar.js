import React, {useState} from 'react'

const Sidebar = () => {
    const [count, setCount] = useState(0)

    const increament = () => {
        const incCount = count + 1
        setCount(incCount)
    }

    const decreament = () => {
        if (count !== 0) {
            const decCount = count - 1
            setCount(decCount)
        }
        else{
            alert('Your Count is Empty !')
        }
    }

    return (
        <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
            <div className="col-lg-12 col-md-12 col-12 mx-auto my-3">
                <label>Using Using state and function base</label>
                <button className="btn btn-primary mx-1 mb-3" onClick={increament}>Increament Number</button>
                <button className="btn btn-danger mx-1 mb-3" onClick={decreament}>Decreament Number</button>
                <h1>{'Count : '+ count}</h1>
            </div>
        </div>
    )
}

export default Sidebar
