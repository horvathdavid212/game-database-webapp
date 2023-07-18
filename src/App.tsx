import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";

// interface GameQuery {
//   genre: Genre | null;
//   platform: Platform | null;
// }

function App() {
  //const [gameQuery,setGameQuery]=useState<GameQuery>({}as GameQuery);

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" bg="lightgreen">
        <NavBar />
      </GridItem>
      <Show>
        <GridItem area="aside" bg="gold" padding="5px">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
