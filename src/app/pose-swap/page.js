import Sidebar from '../../components/Sidebar';
import PoseSwapCreator from './pose-swap-creator';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'Labubu Pose Swap Tool - Labubu Maker',
  description: 'Magically change the pose of any Labubu character in your images. Our AI Pose Swap tool allows you to transform static figures into dynamic new positions.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function PoseSwapPage() {
  return (
    <div className="function-page pt-16">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <PoseSwapCreator />
        </main>
      </div>
    </div>
  );
}