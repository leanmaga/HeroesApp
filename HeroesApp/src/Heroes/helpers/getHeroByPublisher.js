import { heroes } from '../data/Heroes';

export const getHeroByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if ( !validPublisher.includes(publisher) ){
        throw new Error ( `${ publisher } is Invalid publisher` );
    }

    return heroes.filter( heroe => heroe.publisher === publisher  );

}