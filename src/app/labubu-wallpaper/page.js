import Sidebar from '../../components/Sidebar';
import WallpaperCreator from './wallpaper-creator';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'Labubu Wallpaper Creator - Labubu Maker',
  description: 'Create your dream Labubu wallpaper in 4K, for iPhone, or for your laptop. Use our AI generator to design cute, pink, blue, or Zimomo-themed Labubu wallpapers instantly.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function LabubuWallpaperPage() {
  return (
    <div className="function-page pt-16">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <WallpaperCreator />
        </main>
      </div>
    </div>
  );
}