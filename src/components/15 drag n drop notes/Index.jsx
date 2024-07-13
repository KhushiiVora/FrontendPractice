import { useState } from "react";
import { Notes } from "./Notes";

const Index = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Work on yourself, everything else will workout for you.",
    },
    {
      id: 2,
      text: 'Everyone is so occupied in chasing targets and handling pressure @ workplace that we actually forgot "There is beautiful world around us as well"',
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default Index;
