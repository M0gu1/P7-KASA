import '../styles/components/_gallery.scss';
import data from '../data/data';
import Card from './Card';

function Gallery() {

    return (
        // affichage des Card dans la Home gallery avec les infos de data.js
        <main className='home_gallery'>
            {data.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default Gallery


