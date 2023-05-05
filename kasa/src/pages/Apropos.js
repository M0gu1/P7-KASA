import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'

const Apropos = () => {
    const [Datas] = useState(
        [
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
    );

    return (
        <div>
        <Header />
        <div className='a_propos_datas'>
            
            <table>
                <tbody className='a_propos_datas_table'>
                    {
                        Datas.map(data => (
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.content}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Apropos