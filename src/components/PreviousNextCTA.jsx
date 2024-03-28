export const PreviousNextCTA = ({counter, decrement, increment}) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-primary mt-4 me-2"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Previous
      </button>
      <button className="btn btn-primary mt-4" onClick={() => increment()}>
        Next
      </button>
    </div>
  );
};
