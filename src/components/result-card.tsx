import { OpenMovieResult } from "@/types";
import { Badge, Button, Card, CardSection, Group, Image, Text } from "@mantine/core";

interface ResultCardProps {
  cardData: OpenMovieResult;
}

export function ResultCard({ cardData }: ResultCardProps) {
  const {Poster, Title, Type, Year} = cardData
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{flexDirection: "row", justifyContent: "space-between"}}>
        {/* <Image
          src={cardData.Poster}
          height={120}
          alt={`${cardData.Title} poster`}
        /> */}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{Title} - ({Year})</Text>
        <Badge color="pink">{Type}</Badge>
      </Group>
      <Button>Go to Movie</Button>

    </Card>
  );
}
