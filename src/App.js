import "./styles.css";
import ColoredUserpic from "./ColoredUserpic";
import avatar from "./avatar.png";

export default function App() {
  return (
    <div className="App">
      <ColoredUserpic
        src={avatar}
        size={150}
        margin={4}
        backgroundColor="red"
        colors={["green", "blue"]}
        hoverColors={["blue", "green"]}
        colorWidth={6}
      />
    </div>
  );
}
