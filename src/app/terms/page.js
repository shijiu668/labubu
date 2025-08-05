import TermsContent from './terms-content';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'Terms of Service - Labubu Maker',
  description: 'Review the Terms of Service for using the Labubu Maker website and AI tools. Learn about your rights and responsibilities as a user of our platform.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function TermsOfServicePage() {
  return (
    <TermsContent />
  );
}