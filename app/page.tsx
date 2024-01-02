import About from "./sections/About";
import Connect from "./sections/Connect";
import Numbers from "./sections/Numbers";
import Reward from "./sections/Reward";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-5/6 m-auto lg:2/3">
        <Connect />
        <Reward />
        <Numbers />
      </div>
      <img src="people.png" className="hidden lg:w-screen lg:visible" />
      <div className="w-5/6 m-auto lg:2/3">
        <About />
      </div>
    </main>
  )
}
