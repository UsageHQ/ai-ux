import Layout from './components/layout';
export default {
  logo: <span>UI pattern library for Generative AI product</span>,
  project: {
    link: 'https://github.com/UsageHQ/ai-ux',
  },
  docsRepositoryBase: 'https://github.com/UsageHQ/ai-ux/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Usage.so',
      defaultTitle: 'UI pattern library for Generative AI product - Usage.so',
      description:
        'A comprehensive guides for designing UX for AI-powered products',
    };
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href='https://usage.so' target='_blank'>
        🎉 Usage.so beta is comming soon! Subscribe to get early access.
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href='https://rezza.io' target='_blank'>
          Rezza Inc.
        </a>
        .
      </span>
    ),
  },
  chat: {
    link: 'https://discord.gg/taVR5X9hfw',
  },

  main: (props) => <Layout {...props} />,

  // ... other theme options
};
