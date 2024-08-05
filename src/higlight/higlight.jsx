let Higlight = () => {
  function Badge({ text }) {
    return (
      <button>
        <div className="height">{text}</div>
      </button>
    );
  }

  return (
    <>
      <div className="buttons">
        <Badge text="Javascript" />
        <Badge text="React" />
        <Badge text="Node Js" />
      </div>
    </>
  );
};

export default Higlight;
