function Checkboxes({ checkboxData, setCheckboxData }) {
  const handleChange = (index) => {
    const updatedData = [...checkboxData];
    updatedData[index].state = !checkboxData[index].state;
    setCheckboxData(updatedData);
  };
  return (
    <>
      {checkboxData.map((data, index) => {
        return (
          <div className="checkboxes" key={index}>
            <input
              id={index}
              type="checkbox"
              onChange={(e) => handleChange(index)}
              checked={data.state}
            />
            <label htmlFor={index}>{data.title}</label>
          </div>
        );
      })}
    </>
  );
}

export default Checkboxes;
