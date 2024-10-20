import CardContainer from "./components/CardContainer";
import { fetchTriviaQuestions } from "./lib/data";


export default async function Home() {

  const data = await fetchTriviaQuestions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
      <CardContainer data={data} />
    </main>
  );
}
