import '../styles/components/_card.scss';
import { Link } from 'react-router-dom';

function Card({id,title, cover }) {
    // affichage de la cover et du title d'une Card logement
    return (
        <Link to={`/fiche_logement/${id}`} className="gallery_card">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}

export default Card