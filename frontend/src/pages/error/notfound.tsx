import image404 from '../../assets/images/image_404.png'

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <img src={image404} />
        <p className="text-2xl mt-4">Oops! The page you're looking for does not exist.</p>
        <a href="/" className="text-cbt-primary mt-6 underline">Go back to Home</a>
      </div>
    );
  };
  
  export default NotFound;
  