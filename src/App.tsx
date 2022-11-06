import Component, { Item } from "./Component";

function App() {
  const items: Item[] = [
    {
      id: 1,
      title: "item 1",
      imageUrl:
        "https://www.analisidellopera.it/wp-content/uploads/2018/01/Vermeer_La_Merlettaia.jpg",
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ex sed distinctio ea totam sit delectus! Ea, id laborum! Architecto pariatur ullam placeat omnis quam est ea, voluptate earum culpa reprehenderit adipisci sequi autem quidem repellat deserunt asperiores, distinctio possimus animi at, perferendis iure provident commodi! Deleniti neque pariatur voluptatibus?",
    },
  ];

  return (
    <div className="App">
      <Component items={items} />
    </div>
  );
}

export default App;
