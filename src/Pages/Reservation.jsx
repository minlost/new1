import { useEffect, useState } from 'react';
import axios from 'axios'

const Reservation = () => {
    
    const [data, setData] = useState({
        date: '',
        time: '',
        number: '',
        tel: '',
        name: ''
    })

    const handleChaneg = (e) => {
        const {name, value} = e.target
        setData((prev) => {
          return {...prev, [name]: value}
        })
      }
      const printIt = async () => {
        console.log('submitted')
        try {
            const response = await axios.post('http://localhost:8000/senddata', {data})
            console.log(response)
            const success = response.status === 200
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className='form-container'>
            <h1>Rezervace stolu</h1>
            <label>Date</label>
            <input 
                type="date"
                className="form-control"
                name="date"
                onChange={handleChaneg}
                />
                <label>Hodina</label>
            <input 
                type="time"
                className="form-control"
                name="time"
                onChange={handleChaneg}
                />
                <label>Hodina</label>
            <input 
                type="number"
                className="form-control"
                name="number"
                onChange={handleChaneg}
                />
            <input 
                type="text"
                className="form-control"
                name="tel"
                onChange={handleChaneg}
                />
            <input 
                type="text"
                className="form-control"
                name="name"
                onChange={handleChaneg}
                />
                <button onClick={printIt}>PRINT</button>
        </div>
    );
}

export default Reservation;
