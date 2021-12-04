import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavouritesContext from '../store/favourites-context';
function FavouritesPage(){
    const favouritesCntx = useContext(FavouritesContext);
    let content;
    if (favouritesCntx.totalFavourites === 0){
        content = <p>You got no Favorites yet. Start adding some ?</p>
    }
    else{
        content = <MeetupList meetups={favouritesCntx.favourites} />

    }
    return(
<section>
    <h1>
        My Favorites
    </h1>
    {content}
</section>    
)
}
export default FavouritesPage;