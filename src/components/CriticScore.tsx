import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let scoreColor = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={scoreColor}
      fontSize="15px"
      paddingX="10px"
      borderRadius="6px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
