// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from "./nx-welcome";
import { UiShared } from '@poly-monorepo/ui-shared';

export function App() {
  return (
    <div>
      <UiShared />
      <NxWelcome title="marketing-website" />
    </div>
  );
}

export default App;