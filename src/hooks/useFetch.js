import React, { useEffect } from 'react'
import { useState } from 'react'

export const useFetch = (url, metodo) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    const initState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    useEffect(() => {
        console.log("Realizando la peticion");
    }, []);

    const getFetch = async () => {
        initState();
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    messege: response.statusText
                }
            });
            return;
        }
        const data = await response.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        });
    }

    return (
        {
            data: state.data,
            isLoading: state.isLoading,
            hasError: state.hasError,
            error: state.error
        }
    )
}
