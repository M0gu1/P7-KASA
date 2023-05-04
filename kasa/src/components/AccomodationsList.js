import data from '../data/data';

function AccomodationsList() {
    return (
        <ul>
            {data.map((accommodation, index) => (
                <li key={`${accommodation}-${index}`}>{data.id}</li>

            ))}
        </ul >
    )
}

export default AccomodationsList