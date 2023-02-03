import { Link } from 'react-router-dom';

const HeroeCard = ({
id,
superhero,
publisher,
alter_ego,
first_appearance,
characters,
}) => {

const heroImageUrl = `/assets/heroes/${ id }.jpg`;

return (
<>
    
    <div className="card m-2" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <div className="col-md-12">
            <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
                {
                ( alter_ego !== characters ) && ( <p>{ characters } </p> )
                }
                <p className="card-text">{ first_appearance }</p>
                <Link to={`/hero/${ id }`}>
                More...
                </Link>
            </div>
        </div>
    </div>
        
</>
)
}

export default HeroeCard