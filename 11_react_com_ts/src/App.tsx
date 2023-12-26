

function App() {

  //1 - Variaveis 
  const name: string = "Jonatas";
  const age: number = 26;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };


  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>

    </div>
  );
}

export default App;
