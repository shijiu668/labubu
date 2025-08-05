import Sidebar from '../../components/Sidebar';
import TravelsCreator from './travels-creator';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'Labubu Travel Adventures - Labubu Maker',
  description: 'Send Labubu on a global adventure! Generate amazing travel scenes in exotic locations like Japan, the Alps, or tropical beaches with our AI-powered travel creator.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function LabubuTravelsPage() {
  return (
    <div className="function-page pt-16">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <TravelsCreator />
        </main>
      </div>
    </div>
  );
}