const ServerError = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold">500</h1>
        <p className="text-2xl mt-4">Sorry, something went wrong on our end.</p>
        <a href="/" className="text-cbt-primary mt-6 underline">Go back to Home</a>
      </div>
    );
  };
  
  export default ServerError;
  