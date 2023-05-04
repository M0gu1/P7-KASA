import React from 'react'
import Header from '../components/Header'

const Apropos = () => {
    const aboutDatas = [
        {
            "id": "1",
            "title": "Fiabilité",
            "content": "...",
        },
        {
            "id": "2",
            "title": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": "3",
            "title": "Service",
            "content": "..."
        },
        {
            "id": "4",
            "title": "Sécurité",
            "content": "..."
        }
    ]

    return (
        <div>
            <Header />
            <main className='a_propos'>
                {aboutDatas.map(data => {
                    return (
                        <div key={data.id}>
                        </div>
                    )
                }
                )}
            </main>
        </div>
    );
};

export default Apropos