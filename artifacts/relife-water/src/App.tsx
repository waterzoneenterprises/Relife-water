import { Toaster } from 'sonner';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import SplashIntro from '@/components/SplashIntro';

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
      <SplashIntro />
      <Switch>
        <Route path="/" component={Home} />
        {/* Everything is on the single page */}
        <Route component={Home} />
      </Switch>
      <Toaster position="bottom-right" richColors />
    </WouterRouter>
  );
}

export default App;
