import React, { useEffect, useState } from 'react'

const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.accessToken)
                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email])
    console.log(token)
    return [token]
}

export default useToken