import Reac, { useState } from "react";

function Date(props:any) {
    const{ time } = props;
    const [orderTime, setOrderTime ] = useState<any>();
    function dateTime(date:any) {
        const data = Date(date);
        setOrderTime(data);
    };
    dateTime(time);

    return(
        orderTime
    )};

    export default Date;
