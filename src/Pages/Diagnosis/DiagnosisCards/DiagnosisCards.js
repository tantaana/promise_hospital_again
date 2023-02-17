import { useQuery } from '@tanstack/react-query';
import React from 'react';
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