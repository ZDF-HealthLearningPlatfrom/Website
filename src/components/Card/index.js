import React from 'react'
import { Link } from 'react-router-dom';

function Card({ materi, judul, foto, linkTo }) {
    return (
        <>
        <Link to={linkTo}>
        <div class="w-full rounded-xl bg-white shadow-md overflow-hidden md:h-52 transition duration-300 ease-in-out hover:bg-gray-100">
                <div class="md:flex h-full md:p-4">
                    <div class="md:shrink-0">
                        <img class="h-full w-full object-cover md:w-48 md:rounded-l-xl" src={foto} alt="Man looking at item at a store" />
                    </div>
                    <div class="p-8">
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"> {judul}</a>
                        <p class="my-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        <div className='flex justify-between'>
                            <p className="text-gray-400 font-semibold">19 Materi</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Card;
