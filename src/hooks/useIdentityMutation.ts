// react query trabalha com cashs de dados para n deixar o user esperando
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

// oq o react query faz é adicionar um superset de controllers a nossa requisicao, isloading, iserror, variaveis sucessos, cashs q ja busquei, refetch.
interface PersonData {
    firstName: string,
    lastName: string,
    email: string
}

// aqui declaramos a funcao do axios q vai fazer a funcao de POST
const postData = (data: PersonData) => {
    // tenho q passar url, entao abri localhost, e o data que é o body da nossa funcao
    return axios.post('http://localhost:3333/send-data', data)
}

export function useIdentityMutation() {
    // useMutation é usado para create, update e deletar
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        // esse data vai ser um parametro
        mutationFn: (data: PersonData) => postData(data)
    })

    // mutate é nossa chamada. vai ser true cada parametro de acordo com o comportamento do client
    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}