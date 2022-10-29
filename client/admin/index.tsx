import { createRoot } from 'react-dom/client';
import Wrapper from './components/Wrapper';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Wrapper />);
}
