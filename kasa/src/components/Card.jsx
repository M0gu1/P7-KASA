import './_card.scss'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Voir comment gérer l'id !!
function Card({ id, title, cover }) {
    return (
        <div>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

Card.PropTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card