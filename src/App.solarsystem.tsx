import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';
import HeroSection from './components/HeroSection';
import PlanetExplorer from './components/PlanetExplorer';
import OrbitalEducation from './components/OrbitalEducation';
import SolarSystemFacts from './components/SolarSystemFacts';
import PlanetComparison from './components/PlanetComparison';

const createEmotionCache = () => {
  return createCache({
    key: 'mui',
    prepend: true
  });
};

const emotionCache = createEmotionCache();

export default function SolarSystemApp() {
  const [selectedPlanet, setSelectedPlanet] = useState<string>('Earth');

  const handlePlanetClick = (planet: string) => {
    setSelectedPlanet(planet);
    // Scroll to planet explorer section
    const explorerElement = document.getElementById('planet-explorer');
    if (explorerElement) {
      explorerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanetSelect = (planet: string) => {
    setSelectedPlanet(planet);
  };

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeroSection onPlanetClick={handlePlanetClick} />
        <div id="planet-explorer">
          <PlanetExplorer 
            selectedPlanet={selectedPlanet} 
            onPlanetSelect={handlePlanetSelect} 
          />
        </div>
        <OrbitalEducation />
        <SolarSystemFacts />
        <PlanetComparison />
      </ThemeProvider>
    </CacheProvider>
  );
}