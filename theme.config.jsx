import Layout from './components/layout';
import { useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
const logo = (
  <>
    <svg
      width='64'
      height='48'
      viewBox='0 0 216 216'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M170.656 82.1673C172.077 81.4735 173.501 80.7403 174.921 79.9758C173.812 81.8764 172.758 83.7841 171.777 85.6838C167.843 93.3069 164.576 101.777 164.576 109.538C164.576 117.143 167.917 125.317 171.861 132.559C172.791 134.266 173.786 135.979 174.831 137.685C173.133 136.807 171.435 135.97 169.748 135.186C162.28 131.717 154.101 128.848 146.827 128.848C139.074 128.848 130.555 131.635 122.715 135.137C120.691 136.041 118.659 137.018 116.638 138.046C117.908 135.964 119.113 133.864 120.225 131.763C124.234 124.186 127.517 115.712 127.517 107.718C127.517 100.005 124.182 91.6689 120.209 84.2335C119.294 82.5194 118.314 80.8 117.287 79.0865C119.307 80.1828 121.329 81.2238 123.334 82.1882C130.985 85.8679 139.378 88.9282 146.827 88.9282C154.594 88.9282 163.018 85.8973 170.656 82.1673Z'
        stroke='currentColor'
        stroke-width='16'
      />
      <path
        d='M65.5909 68.9091H85.2727V129.364C85.2727 136.152 83.6515 142.091 80.4091 147.182C77.197 152.273 72.697 156.242 66.9091 159.091C61.1212 161.909 54.3788 163.318 46.6818 163.318C38.9545 163.318 32.197 161.909 26.4091 159.091C20.6212 156.242 16.1212 152.273 12.9091 147.182C9.69697 142.091 8.09091 136.152 8.09091 129.364V68.9091H27.7727V127.682C27.7727 131.227 28.5455 134.379 30.0909 137.136C31.6667 139.894 33.8788 142.061 36.7273 143.636C39.5758 145.212 42.8939 146 46.6818 146C50.5 146 53.8182 145.212 56.6364 143.636C59.4848 142.061 61.6818 139.894 63.2273 137.136C64.803 134.379 65.5909 131.227 65.5909 127.682V68.9091Z'
        fill='currentColor'
      />
      <path
        d='M114.797 193.424C114.797 193.424 105.722 194.446 103.096 197.012C100.586 199.465 100.072 207.814 100.072 207.814C100.072 207.814 99.0178 199.491 96.5956 197.012C93.9103 194.265 85.1957 192.593 85.1957 192.593C85.1957 192.593 92.8639 191.435 95.5956 188.765C98.1713 186.248 99.9205 178.202 99.9205 178.202C99.9205 178.202 100.627 187.486 103.096 190.012C105.72 192.697 114.797 193.424 114.797 193.424Z'
        fill='currentColor'
      />
      <path
        d='M175.797 163.424C175.797 163.424 166.722 164.446 164.096 167.012C161.586 169.465 161.072 177.814 161.072 177.814C161.072 177.814 160.018 169.491 157.596 167.012C154.91 164.265 146.196 162.593 146.196 162.593C146.196 162.593 153.864 161.435 156.596 158.765C159.171 156.248 160.92 148.202 160.92 148.202C160.92 148.202 161.627 157.486 164.096 160.012C166.72 162.697 175.797 163.424 175.797 163.424Z'
        fill='currentColor'
      />
    </svg>
    <span className='font-bold'>
      UI pattern library for Generative AI products
    </span>
  </>
);

export default {
  logo,
  project: {
    link: 'https://github.com/UsageHQ/ai-ux',
  },
  docsRepositoryBase: 'https://github.com/UsageHQ/ai-ux/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – rezza.io',
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

  head: () => {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === '/' || !title
        ? 'https://ai-ux.rezza.io/og'
        : `https://ai-ux.rezza.io/api/og?title=${title}`;

    return (
      <>
        <link rel='icon' type='image/png' href='/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={socialCard} />
        <meta name='twitter:site:domain' content='ai-ux.rezza.io' />
        <meta name='twitter:url' content='https://ai-ux.rezza.io' />
        <meta name='og:title' content={title ? title + ' – Rezza' : 'Rezza'} />
        <meta name='og:image' content={socialCard} />
        <meta name='apple-mobile-web-app-title' content='Rezza' />
      </>
    );
  },
};
