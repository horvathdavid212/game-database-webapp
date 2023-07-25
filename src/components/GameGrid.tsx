import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      padding="10px"
      spacing={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          //<GameCardContainer>
          <GameCardSkeleton key={skeleton} />
          //</GameCardContainer>
        ))}
      {data?.results.map((game) => (
        //ha nem lenne jó akkor ezt kell kitörölni
        //<GameCardContainer>
        <GameCard key={game.id} game={game} />
        //</GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
