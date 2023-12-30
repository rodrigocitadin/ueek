import Connect from "./sections/Connect";
import Numbers from "./sections/Numbers";
import Reward from "./sections/Reward";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-2/3 m-auto">
        <Connect />
        <Reward />
        <Numbers />
      </div>
      <img src="people.png" className="w-screen" />
    </main>
  )
}
