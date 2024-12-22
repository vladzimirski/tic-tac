import  { useEffect, useState } from "react";
export function WinnerCounter (props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        debugger
        if (props.winner){
            setCount(count + 1 )
        }
      }, [props.winner]);
    return <div>Winers Counter:{count}</div>
}

