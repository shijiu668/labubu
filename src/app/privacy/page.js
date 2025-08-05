import PrivacyContent from './privacy-content';

// 在这个服务器组件中安全地导出 metadata
export const metadata = {
  title: 'Privacy Policy - Labubu Maker',
  description: 'Read the official Privacy Policy for Labubu Maker. Understand how we handle your data, uploaded images, and protect your privacy when you use our services.',
};

// 这是您的页面父组件，现在是一个服务器组件
export default function PrivacyPolicyPage() {
  return (
    <PrivacyContent />
  );
}