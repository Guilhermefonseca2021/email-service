import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

// oq o react query faz é adicionar um superset de controllers a nossa requisicao, isloading, iserror, variaveis sucessos, cashs q ja busquei, refetch.
interface PersonData {
    firstName: string,
    lastName: string,
    email: string
}

const postData = (data: PersonData) => {
    return axios.post('http://localhost:3000/send-data', data)
}

export function useIdentityMutation() {
    // useMutation é usado para create, update e deletar
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        // esse data vai ser um parametro (para dentro do estado do nossa porta)
        mutationFn: (data: PersonData) => postData(data)
    })

    // mutate é nossa chamada criada com submit do usuario. vai ser true cada parametro de acordo com o comportamento do client
    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}