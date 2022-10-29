import Button from '../../shared/components/Button';
import { ErrorBoundary } from '../../shared/components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="w-screen h-screen flex items-center justify-center">
        <Button>Hello World</Button>
      </div>
    </ErrorBoundary>
  );
};

export default App;
