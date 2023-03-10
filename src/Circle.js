import React, { useState } from 'react'
import { AuthContextState } from './Context'
import User from './User'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Circle = () => {
    const { ar, setAr, shift, setShift } = AuthContextState()
    const [value, setValue] = useState(true)
    const reverse = (ar, i, j) => {
        let newArray = ar;
        while (i < j) {
            let temp = ar[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
            i++;
            j--;
        }

        setAr([...newArray])
    }

    const rotate = (ar, k) => {
        setValue(!value)
        k = k % ar.length;
        if (k < 0) {
            k = k + ar.length
        }

        reverse(ar, 0, ar.length - k - 1);
        reverse(ar, ar.length - k, ar.length - 1);
        reverse(ar, 0, ar.length - 1);

        if (k == 4) { setShift('prev') }

        else if (k == 1) { setShift('next') }

    }


    return (
        <>
            <div className='semi_circle' style={value ? { backgroundColor: "#7ABD87" } : { backgroundColor: "#C5F8C7" }}>
                <div className='circle' >
                    {
                        ar.map((profile, index) => (
                            <User key={profile.name} profile={profile} index={index} />
                        ))
                    }
                </div>
            </div>
            <div className='controller'>
                <div className='prev' onClick={() => rotate(ar, -1)} >
                    <ArrowDownwardIcon className="change_btn" />
                </div>
                <div className='next' onClick={() => rotate(ar, 1)}>
                    <ArrowDownwardIcon className="change_btn" />
                </div>
            </div>
        </>
    )
}

export default Circle