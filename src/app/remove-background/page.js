import Sidebar from '../../components/Sidebar';
import RemoverCreator from './remover-creator';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'Remove Background from Labubu Images - Labubu Maker',
  description: 'Effortlessly remove the background from any Labubu image with our AI tool. Create a professional, transparent PNG of your Labubu figure for any project.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function RemoveBackgroundPage() {
  return (
    <div className="function-page pt-16">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <RemoverCreator />
        </main>
      </div>
    </div>
  );
}