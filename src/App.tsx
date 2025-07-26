import React from 'react';
import { Route, Switch } from 'wouter';

import 'animate.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IngredientsSection } from './components/IngredientsSection';
import { PreparationSection } from './components/PreparationSection';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';

import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticasPrivacidad from './pages/PoliticasPrivacidad';

const Home = () => (
  <>
    <Navbar />
    <main className="flex-grow">
      <HeroSection />
      <IngredientsSection />
      <PreparationSection />
      <FormSection />
    </main>
    <Footer />
  </>
);

export function App() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/terminos" component={TerminosCondiciones} />
        <Route path="/privacidad" component={PoliticasPrivacidad} />
      </Switch>
    </div>
  );
}
