'use client';

import { Provider, useSelector } from "react-redux";
import About from "./sections/About";
import Connect from "./sections/Connect";
import Numbers from "./sections/Numbers";
import PaymentAside from "./sections/PaymentAside";
import Reward from "./sections/Reward";
import store from "./store";
import AsideNav from "./components/AsideNav";
import FullNav from "./components/FullNav";
import BottomNav from "./components/BottomNav";

function App() {
  const blur = useSelector((state: any) => state.aside.blur);
  const paymentBlur = useSelector((state: any) => state.aside.paymentBlur);

  return (
    <>
      <header className={`fixed top-0 z-10 w-5/6 mx-auto xl:w-2/3 ${paymentBlur}`}>
        <AsideNav />
        <FullNav />
      </header>
      <main className='min-h-screen mt-24 lg:mt-12'>
        <PaymentAside />
        <div className={`w-5/6 m-auto lg:w-2/3 ${blur}`}>
          <Connect />
          <Reward />
          <Numbers />
        </div>
        <img src="people.png" className={`hidden lg:w-screen xl:block ${blur}`} />
        <div className={`w-5/6 m-auto lg:w-2/3 ${blur}`}>
          <About />
        </div>
      </main>
      <footer className={`w-5/6 mx-auto xl:w-2/3 ${blur}`}>
        <BottomNav />
      </footer>
    </>
  )
}

export default function Home() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
