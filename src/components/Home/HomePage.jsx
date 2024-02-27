// /components/Home/HomePage.jsx
import Button from '../Common/Button';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to My App!</h2>
      <p className="text-lg mb-4">
                This is the home page content. You can add more components and features here.
      </p>
      <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
    </div>
  );
};

export default HomePage;
