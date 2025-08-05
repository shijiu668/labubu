import HelpContent from './help-content';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'Help Center & FAQ - Labubu Maker',
  description: 'Find answers to frequently asked questions about creating Labubu wallpapers, troubleshooting image generation, and using our AI creative tools.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function HelpPage() {
  return (
    <HelpContent />
  );
}