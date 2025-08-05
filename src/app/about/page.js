import AboutContent from './about-content';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'About Us - Labubu Maker',
  description: 'Learn about the story and mission behind Labubu Maker, the passionate team fusing AI creativity with our love for Labubu characters.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function AboutPage() {
  return (
    <AboutContent />
  );
}