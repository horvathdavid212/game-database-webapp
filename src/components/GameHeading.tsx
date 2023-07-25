import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreID);
  const platform = usePlatform(gameQuery.platformID);

  const heading = `${platform?.name || ""} 
    ${genre?.name || ""} Játékok`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
