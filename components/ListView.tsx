import { ReactElement } from "react";
import { Text, View } from "./Themed";

const items = [
  {
    "birthControl": "Prolayx",
    "bcTime": "06:00",
    "feelings": "sad, unhappy",
    "date": "3/1/22",
    "rating": "2/10",
  },
  {
    "birthControl": "Prolayx",
    "bcTime": "06:00",
    "feelings": "happy",
    "date": "3/2/22",
    "rating": "6/10",
  },
  {
    "birthControl": "Prolayx",
    "bcTime": "06:00",
    "feelings": "spicy, sexually frustrated",
    "date": "3/5/22",
    "rating": "4/10",
  },
  {
    "birthControl": "Prolayx",
    "bcTime": "06:00",
    "feelings": "rejuvanated, exhilarated",
    "date": "3/7/22",
    "rating": "9/10",
  },
]

export default function ListView(): ReactElement {
  return (
    <>
      {
        items.map((item, i) => {
          return <ListItem
            key={i}
            birthControl={item.birthControl}
            bcTime={item.bcTime}
            feelings={item.feelings}
            date={item.date}
            rating={item.rating}
          />
        })
      }
    </>
  )
}

function ListItem({birthControl, bcTime, feelings, date, rating}: {
  birthControl: string,
  bcTime : string,
  feelings: string,
  date: string,
  rating: string,
}): ReactElement {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text>
        {`Date: ${date}`}
      </Text>
      <Text>
        {`Birth Control: ${birthControl} at ${bcTime}`}
      </Text>
      <Text>
        {`Feelings: ${feelings}`}
      </Text>
      <Text>
        {`Mood: ${rating}`}
      </Text>
    </View>
  );
}