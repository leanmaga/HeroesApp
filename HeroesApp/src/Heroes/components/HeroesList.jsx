import { useMemo } from 'react'
import { getHeroByPublisher } from '../helpers/getHeroByPublisher'
import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher( publisher ), [ publisher ]) ;

  return (
    <div className='list col-12 col-sm-6 col-md-4 col-lg-3'>
        {
          heroes.map( hero => (
              <HeroeCard
                  key={ hero.id }
                  { ...hero } //le paso las propiedades del hero es como hacer id: hero.id;
              />
          ))
        }
    </div>
  )
}

export default HeroesList