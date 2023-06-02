import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(()=> {
        const load = localStorage.getItem(key);

        if (laod != null) return JSON.parse(load);

        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [ value, setValue]
}