import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';
import DiagnosisCard from '../DiagnosisCard/DiagnosisCard';

const DiagnosisCards = () => {

    const { data: diagnosis = [], isLoading } = useQuery({
        queryKey: ['diagnosis'],
        queryFn: async () => {
            const res = await fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/diagnosis`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return (
            <div className='flex justify-center pt-64 pb-64'>
                <div class="flex flex-col">
                    <div class="w-12 h-12 rounded-full animate-spin
                            border-4 border-solid border-blue-900 border-t-transparent shadow-md">

                    </div>


                </div>
            </div>
        );
    }
    // console.log(diagnosis)
    return (
        <div>
            <div className='w-full md:w-11/12	mx-auto ' >
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6'>
                    {
                        diagnosis.map(daig =>
                            <DiagnosisCard key={daig.id}
                                data={daig}
                            ></DiagnosisCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DiagnosisCards;