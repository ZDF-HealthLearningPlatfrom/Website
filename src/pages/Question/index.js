import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { CardQuestion } from '../../components'

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Question() {
    const {id} = useParams();
    const [question, setQuestion] = useState([]);
    const [data, setData] = useState({
        id: 0,
        answer: '',
    })

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`${BASE_URL}/question/${id}`, config).then(res => {
            let response = res.data.question
            setQuestion(response)
            console.log(response)
        })
    }, [id])

    return (
        <div className='container mx-auto p-3 py-10'>
            <h1 className='font-bold text-3xl mb-3'>Sesi Pertanyaan</h1>
            <p className='text-gray-600'>berikut pertanyaan yang harus dijawab : </p>
            <hr className='my-5' />
            {question.map((data, idx) => {
                return(
                <CardQuestion data={data} key={idx} />
                )
            })}
            <Link to="/complete">
                <button className='w-full bg-red-600 text-white font-bold py-3 hover:bg-opacity-75 rounded-lg'>Kirim Jawaban dan Lihat Hasil</button>
            </Link>
        </div>
    )
}

export default Question
