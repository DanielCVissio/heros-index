import { getHoeroesByPublisher } from "../helpers"
import { HeroCard } from "./";


export const HeroList = ({publisher}) => {

    const heroes = getHoeroesByPublisher( publisher );

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero =>(
                    <li key ={ hero.id }>
                        <HeroCard 
                            key={ hero.id }
                            {...hero}
                        />
                    </li>
                ))
            }
        </div>
    )
}
