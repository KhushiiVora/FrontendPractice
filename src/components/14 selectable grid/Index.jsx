import { Grid } from "./Grid";
import "./index.css";

const Index = () => {
  return (
    <div className="container">
      <h1>Selectable Grid</h1>
      <Grid rows={10} cols={10} />
    </div>
  );
};

export default Index;
