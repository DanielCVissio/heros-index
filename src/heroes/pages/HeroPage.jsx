import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);
  
  console.log(hero);

    return (
      <>
        <h1>{hero.superhero}</h1>
      </>
    )
  }