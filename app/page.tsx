import CardContainer from "./components/CardContainer";
import { getTriviaData } from "./lib/triviaQueries";


export default async function Home() {

  const data = await getTriviaData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-200">
      <CardContainer data={data} />
    </main>
  );
}
