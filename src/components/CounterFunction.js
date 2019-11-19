import React, { useState } from 'react';
import Button from '@material-ui/core/Button'

export default function Function() {
  // Declare a new state variable, which we'll call "count"
    let [count, setCount] = useState(0)
    if (count < 0) {
        count = 0
    }

    return (
    <div> 
        <p>    
        <Button 
        color="primary" 
        variant="outlined" 
        onClick={() => setCount(count + 1)}>
            Increment
        </Button>
        Count : {count}
        <Button 
        color="primary" 
        variant="outlined" 
        onClick={() => setCount(count - 1)}>
            Decrement
        </Button>
        </p> 
        <Button size="large" variant="contained" color="primary" 
        onClick={() => setCount(count = 0)}>
          Reset
        </Button>  
        </div>
)
}