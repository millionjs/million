export const translations = {
  'en-US': {
    hero: {
      makeReact: 'Make React',
      faster: 'faster',
      the: 'The',
      dropIn: 'drop-in optimizing compiler',
      forReact:
        'for React. Gain big performance wins for UI and data heavy React apps. Dead simple to use – try it out',
      now: 'now',
      getStarted: 'Get started →',
      how: 'How?',
      trustedBy: 'Trusted by companies who ship to',
      users: 'users',
    },
    showCase: {
      faster: 'Faster than the rest',
      witness:
        'Witness MillionJS in production where it creates a better user experiences.',
      showCase: 'View the Million.js showcase',
    },
    about: {
      whatsInMillionJS: "What's in Million.js?",
      toolsToMakeReactFaster: 'The tools to make React faster, automatically.',
      blockVirtualDom: 'Block Virtual DOM',
      blockVirtualDomQuote: `"block" virtual DOM.`,
      millionIntroduces: 'Million.js introduces a novel',
      blockVirtualDomDescription:
        "It's significantly faster than React's virtual DOM, as it diffs data instead of the DOM.",
      superchargedCompiler: 'Supercharged Compiler',
      millionUses: 'Million.js uses a',
      customCompiler: 'custom compiler',
      automaticallyOptimizes:
        'that automatically optimizes your React components on the server.',
      automaticMode: 'Automatic Mode',
      tiredOf:
        'Tired of learning new frameworks and big migrations? Million.js ships',
      dropIn: 'a drop-in automatic mode',
      makeReactFaster:
        'to make your React apps faster, without any code changes.',
      rawJs: 'React at the speed of raw JS',
      rawJsDescription:
        'Million.js optimizes React, improving its performance. It stands out as one of the top performers in the',
      jsBenchmark: 'JS Framework Benchmark',
      seventyPercent: 'Up to 70% faster* than React.',
      benchmarkWarning:
        '* - Benchmarks may not represent real-world performance.',
      integrate: 'Integrate and ship in minutes.',
      noNeedLearn:
        'No need to learn a new framework. Works with your existing React components.',
      benchmarkNote: `Note: Benchmarks (via JS Framework Benchmark) do not represent
      real-life performance. Million.js does have some limitations.
      Performance improvements may be more noticeable with apps that
      include more data / UI components.`,
      higherBetter: 'Geometric mean of all benchmarks (higher is better)',
      basedOn: 'Based on',
      benchmarkData: 'JS Framework Benchmark data',
      chromeVersion: '(Chrome 102)',
    },
    cta: {
      getStartedInSeconds: 'Get started in seconds',
      welcome:
        "Welcome to the Million.js community. Let's build something great.",
      getStarted: 'Get started →',
    },
    faqs: {
      frequently: 'Frequently asked questions',
      description:
        'You can find more specific information about the library by digging into the documentation and reading our blog articles.',
      fast: 'How is it fast?',
      novelApproach:
        'It uses a novel approach to the virtual DOM called the block virtual DOM. You can read more on what the block virtual DOM is with',
      virtualDom: 'Virtual DOM: Back in Block',
      makeItHappen: 'and how we make it happen in React with',
      block: 'Behind the block()',
      compare: 'How does it compare to',
      JSFramework: '[insert fast JS framework]',
      depends:
        "Depends on what you're asking. If you're asking about performance, you can view a subjective truth with the",
      benchmark: 'JS Framework Benchmark',
      useCase:
        "If you're asking about features, it depends. Million.js' main use case is for optimizing UI / data heavy React applications. Ultimately you should be choosing the framework that works best for you, your team, and  your project.",
      doesItWork: 'Does it work with Preact, Next.js, etc.?',
      probably:
        'If it uses React or Preact, then probably. You can reference the full list of supported tools on the',
      guide: 'Installation Guide',
      limitations: 'What are the limitations?',
      viewList: 'You can view the list of current limitations in the',
      rulesOfBlocks: 'Rules of Blocks',
      importantNote:
        "We are actively working on removing these limitations. It's also  important to note that your application may not need Million.js – if your app is not UI heavy, you may not see much performance improvement.",
      isItMemo: 'Is this just memo?',
      memoization:
        ' While React provides memoization utilities, Million.js takes a drastically different approach. Instead of trying to reduce and avoid rerendering, it makes the render process faster. Because fundamentally, memoization is a band-aid, especially if you have a lot of dynamic data. You can check out our blog article',
      backInBlock: 'Virtual DOM: Back in Block',
      learnMore:
        'to learn more about how Million works with React under the hood.',
      logo: 'What is the logo supposed to be?',
      he: "He's",
      milTheLion: 'Mil the Lion!',
      friendlyMascot: "He's the friendly mascot of the Million.js project.",
      nobite: "don't worry, he doesn't bite, but he will",
      byte: 'byte!',
    },
  },
} as const;
