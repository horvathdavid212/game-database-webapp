import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            //<GameCardContainer>
            <GameCardSkeleton key={skeleton} />
            //</GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
        {/* {data?.results.map((game) => (
        ha nem lenne jó akkor ezt kell kitörölni
        <GameCardContainer>
        <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))} */}
      </SimpleGrid>
      <Box display="flex" justifyContent="center" marginTop={3}>
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Betöltés..." : "Több betöltése"}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default GameGrid;
