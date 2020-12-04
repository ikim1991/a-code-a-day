import React, { useEffect } from 'react';

const ChildComponent = (props: any) => {
    console.log("Child Component")

    useEffect(() => {
        props.fetchData("Child")
    }, [props]);

    return(
        <div>
            <h2>{props.title}</h2>
        </div>
    )
};

export default React.memo(ChildComponent);