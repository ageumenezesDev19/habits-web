import './styles/global.css';
import { Habit } from "./components/Habit";

export function App() {
  return (
    <>
      <Habit completed={5} />
      <Habit completed={5} />
      <Habit completed={5} />
      <Habit completed={5} />
      <Habit completed={5} />
    </>
  )
}
