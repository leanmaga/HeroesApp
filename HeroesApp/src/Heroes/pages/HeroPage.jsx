import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";

const HeroPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo( () => getHeroById( id ), [ id ]);
    
    const onNavigateBack = () => {
      navigate(-1);
    };

    if ( !hero ) {
      return <Navigate to="/marvel" />;
    }


  
  return (
    <>
      <div className="row m-5">
        
        <div className="hero-poster-container col-md-4">
          <img 
            src={ `/assets/heroes/${ id }.jpg`} 
            alt={ hero.superhero } 
            className="hero-poster img-thumbnail animate__animated animate__backInLeft"
          />
        </div>
        
        <div className="hero-poster-container mt-5 col-md-8">
          <h2>{ hero.superhero }</h2>
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b> { hero.alter_ego }
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> { hero.publisher }
            </li>
            <li className="list-group-item">
              <b>First Appearance:</b> { hero.first_appearance }
            </li>
          </ul>

          <h5 className="mt-3"> Characters </h5>
          <p className='text-white'>{ hero.characters }</p>

          <button 
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }
          >
            Back
          </button>


        </div>

      </div>
      
    </>
  )
}

export default HeroPage