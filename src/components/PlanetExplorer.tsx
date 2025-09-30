import { useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlanetCard from './PlanetCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ExplorerContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  position: 'relative'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  marginBottom: theme.spacing(6)
}));

const PlanetGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: theme.spacing(3),
  maxWidth: '1400px',
  margin: '0 auto'
}));

const PlanetButton = styled(Button)<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  padding: theme.spacing(1.5, 3),
  borderRadius: '20px',
  background: isSelected 
    ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
    : 'rgba(255, 255, 255, 0.05)',
  border: `1px solid ${isSelected ? 'transparent' : 'rgba(255, 255, 255, 0.1)'}`,
  color: theme.palette.text.primary,
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: isSelected 
      ? `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
      : 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)'
  }
}));

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

interface PlanetExplorerProps {
  selectedPlanet?: string;
  onPlanetSelect: (planet: string) => void;
}

export default function PlanetExplorer({ selectedPlanet, onPlanetSelect }: PlanetExplorerProps) {
  const [activePlanet, setActivePlanet] = useState<string>(selectedPlanet || 'Earth');

  const handlePlanetSelect = (planet: string) => {
    setActivePlanet(planet);
    onPlanetSelect(planet);
  };

  return (
    <ExplorerContainer>
      <Stack spacing={6} alignItems="center">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <SectionTitle variant="h2">
            惑星探索センター
          </SectionTitle>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px' }}>
            各惑星をクリックして詳細な情報を確認できます。太陽系の8つの惑星それぞれの特徴を学びましょう。
          </Typography>
        </Stack>

        <Stack 
          direction="row" 
          spacing={2} 
          flexWrap="wrap" 
          justifyContent="center"
          sx={{ gap: 2 }}
        >
          {planets.map((planet) => (
            <PlanetButton
              key={planet}
              isSelected={activePlanet === planet}
              onClick={() => handlePlanetSelect(planet)}
              startIcon={<InfoOutlinedIcon />}
            >
              {planet}
            </PlanetButton>
          ))}
        </Stack>

        <PlanetGrid>
          <PlanetCard planetName={activePlanet} />
        </PlanetGrid>
      </Stack>
    </ExplorerContainer>
  );
}