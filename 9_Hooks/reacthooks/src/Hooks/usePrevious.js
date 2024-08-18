import { useEffect, useRef } from "react";

export const usePrevious = () => {

    const ref = useRef;
   
    useEffect(() => {
        ref.current = value;
    })

    return ref.current;
};