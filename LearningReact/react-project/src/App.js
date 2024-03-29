import GameCard from "./GameCard";


const gamesList = [
  {
    id: 0,
    name: "Scythe",
    rating: null,
    category: "Fun"
  },
  {
    id: 1,
    name: "Machi Koro",
    rating: null,
    category: "Deck Building"
  },
  {
    id: 2,
    name: "Galaxy Trucker",
    rating: null,
    category: "Fun"
  }
]

function App() {
  return (
    <div>
      <h1>Board Games</h1>
      { gamesList.map((g) => (
        <GameCard key={g.id} game={g} ></GameCard>
      )
        
      )}
    </div>
  );
}

export default App;
