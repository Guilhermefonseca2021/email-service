// react query trabalha com cashs de dados para n deixar o user esperando
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface PersonData {
    firstName: string,
    lastName: string,
    email: string
}


const postData = (data: PersonData) => {
    return axios.post('http://localhost:3333/send-data', data)
}

export function useIdentityMutation() {
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })

    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}