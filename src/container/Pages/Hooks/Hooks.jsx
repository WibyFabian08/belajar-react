import React, {useEffect, useState} from 'react';
import './Hooks.css';

const Hooks = () => {
    const [count, setCount] = useState(10);

    const handleCountPlus = () => {
        setCount(count + 1);
    }

    const handleCountMin = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        document.title = `title change ${count}`;

        return () => {
            document.title = 'Belajar React';
        }

    })

    return(
        <div className='container-hooks'>
            <p className='paragraf'>Nilaiku Saat Ini : {count}</p>
            <button className='add-btn' onClick={() => handleCountPlus()}>Tambah Nilai</button>
            <button className='min-btn' onClick={() => handleCountMin()}>Kurangi Nilai</button>
        </div>
    );
}

export default Hooks;