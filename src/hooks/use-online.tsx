import { useState, useEffect } from "react"

export function useOnline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const online = () => {
            setIsOnline(true)
        }
        const offline = () => {
            setIsOnline(false)
        }

        window.addEventListener("offline", offline)
        window.addEventListener('online', online)

        return () => {
            window.removeEventListener("online", online)
            window.removeEventListener("offline", offline)
        }
    })


    return { isOnline }
}

