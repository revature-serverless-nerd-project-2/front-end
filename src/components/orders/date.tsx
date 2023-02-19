import Reac, { useState } from "react";

function Date(props:any) {
    const{ time } = props;
    const [orderTime, setOrderTime ] = useState<any>();
    function dateTime(date:any) {
        const data = Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
        setOrderTime(data);
    };
    dateTime(time);

    return(
        orderTime
    )};

    export default Date;
