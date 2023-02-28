import { Private } from "./private.app";
import { Public } from "./public.app";

export const App: React.FC = () => {
  const loggedIn = true;
  if (loggedIn) {
    return <Private />;
  }
  return <Public />;
};
