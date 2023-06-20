import { useSandpack } from '@codesandbox/sandpack-react';
import { useAtom } from 'jotai';
import { frameworkAtom } from '@/atoms/framework';
import type { Framework } from '@/types';

interface FrameworkConfig {
  value: Framework;
  label: string;
}

const frameworks: FrameworkConfig[] = [
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
];

export function FrameworkSwitcher() {
  const { dispatch } = useSandpack();
  const [framework, setFramework] = useAtom(frameworkAtom);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFramework = event.target.value as Framework;
    setFramework(selectedFramework);

    setTimeout(() => {
      dispatch({ type: 'shell/restart' });
    }, 1000);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-5">
      <h1 className="text-black">FRAMEWORK: </h1>
      <select
        onChange={handleSelect}
        className=" bg-white border border-gray-500 text-gray-700 h-10 pl-5 pr-10 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
        value={framework}
      >
        {frameworks.map((frameworkVal) => (
          <option
            key={frameworkVal.value}
            value={frameworkVal.value}
            className="py-1"
          >
            {frameworkVal.label}
          </option>
        ))}
      </select>
    </div>
  );
}