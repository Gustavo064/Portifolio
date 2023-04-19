import React, { useEffect, useState } from 'react';
import Home from '../Screen/Home';
import moment from 'moment';
import 'moment/locale/pt-br';

const HomeContainer = () => {
    const [message, setMessage] = useState("")
    const hourDate = moment().format('LT')
    const separator = hourDate.split(":")
    const hour = parseInt(separator[0])
    const minute = parseInt(separator[1])
    const calcYear = () => {
        const atualYear = moment(new Date()).format("YYYY");
        return parseInt(atualYear) - 2002
    }

    
    useEffect(() => {
        if ((hour >= 5) && (hour <= 12 && minute <= 59)) {
            setMessage("Bom dia")
        }
        else if ((hour >= 13) && (hour <= 17 && minute <= 59)) {
            setMessage("Boa Tarde")
            // return "Boa Tarde"
        } else if ((hour >= 18) && (hour <= 23 && minute <= 59)) {
            setMessage("Boa Noite")
        } else {
            setMessage("Boa Madrugada")
        }
    }, [minute])

    return <Home
        calcYear={calcYear}
        message={message}
    />
}
export default HomeContainer;