import LabubuClickerGame from './clicker-game';

// Server component metadata
export const metadata = {
  title: 'Labubu Clicker',
  description: 'Play the addictive Labubu Clicker for free! Click to collect Labubu characters, unlock upgrades, and become the ultimate Labubu collector. Fun for all ages.',
  keywords: 'labubu clicker, labubu game, clicker game, idle game, labubu collector, free online game',
  openGraph: {
    title: 'Labubu Clicker',
    description: 'Play the addictive Labubu Clicker game for free! Click to collect Labubu characters and unlock upgrades.',
    type: 'website',
  },
};

// Server component page
export default function LabubuClickerPage() {
  return (
    <div className="min-h-screen pt-16">
      <LabubuClickerGame />
    </div>
  );
}