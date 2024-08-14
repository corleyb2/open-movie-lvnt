import { OpenMovieResult } from "@/types";
import {
  Badge,
  Button,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useMemo } from "react";

interface ResultCardProps {
  cardData: OpenMovieResult;
}

export function ResultCard({ cardData }: ResultCardProps) {
  const { Poster, Title, Type, Year } = cardData;

  const colorForType = useMemo(() => {
    if (Type === "episode" ){
        return "maroon"
    } else if (Type === "movie"){
      return "green"
    } else {
      return "blue"
    }
  }, [Type])

  return (
    <Card
      shadow="sm"
      padding="sm"
      radius="md"
      withBorder
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Flex style={{position: "relative"}}>
      <Image
        src={cardData.Poster}
        height={120}
        alt={`${cardData.Title} poster`}
      />
       <Badge color={colorForType} style={{position: "absolute", top: -10, right: -10}}>{Type}</Badge>
       </Flex>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>
          {Title} - ({Year})
        </Text>
       
      </Group>
      <Button>Go to Movie</Button>
    </Card>
  );
}
