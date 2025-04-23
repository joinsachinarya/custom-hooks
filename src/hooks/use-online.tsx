import { useState, useEffect } from "react"

export function useOnline() {
    const [isOnline, setIsOnline] = useState('')


    return { isOnline }
}

