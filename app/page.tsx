import Connect from "./sections/Connect";
import Numbers from "./sections/Numbers";
import Reward from "./sections/Reward";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Connect />
      <Reward />
      <Numbers />
    </main>
  )
}
