import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
