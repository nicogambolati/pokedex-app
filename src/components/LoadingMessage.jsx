export const LoadingMessage = () => {
  return (
    <section className="card-container">
      <div className="d-flex justify-content-center align-items-center loading-message">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        <h1>Loading...</h1>
      </div>
    </section>
  );
};
