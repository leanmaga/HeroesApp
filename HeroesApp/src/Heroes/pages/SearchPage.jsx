import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../helpers/getHeroByName';
import HeroeCard from '../components/HeroeCard';

const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    //console.log({location});

    const heroes = getHeroByName( q );


    const showSearch = ( q.length === 0 );
    const showError = ( q.length > 0 ) && heroes.length === 0 ;

    const { searchText, onInputChange } = useForm({
      searchText: q
    })

    const onSearchSubmit = ( event ) => {
      event.preventDefault();

      if ( searchText.trim().length <= 1 ) return;

      navigate(`?q=${ searchText }`);
      //console.log({searchText})
    }



  return (
    <>
      
      
      <div className="row m-4">
        
        <div className="col-12 col-lg-5 d-block justify-content-md-around">
          
          <h4 className='text-center m-3'>Searching</h4>
          <hr className='text-white m-3'/>

          <div className="container-fluid d-flex  m-3">
            <form action="" onSubmit={ onSearchSubmit }>
              <input 
                type="text" 
                placeholder='Search a hero' 
                className='form-control m-3' 
                name='searchText' 
                autoComplete='off'
                value={ searchText}
                onChange={ onInputChange }
              />
            </form>

            <button className='btn btn-outline-primary m-3 ' onClick={ onSearchSubmit }>Search</button>

          </div>

        </div>

        <div className="col-12 col-lg-7 d-block justify-content-md-around">
          
          <h4 className='text-center m-3'>Results</h4>
          <hr className='text-white m-3'/>

          <div className="m-3 alert alert-primary animate__animated animate__fadeIn"
               style={{ display: showSearch ? '' : 'none'}}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
               style={{ display: showError ? '' : 'none'}}>
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroeCard key={ hero.id } { ...hero } />
            ))
          }

        </div>

      </div>
     
    
    </>
  )
}

export default SearchPage