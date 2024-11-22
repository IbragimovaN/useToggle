import { useToggle } from "./hooks/useToggle";

export function Demo() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);
  // const [value, toggle] = useToggle();

  return <button onClick={() => toggle("ooop")}>{value.toString()}</button>;
}
