import { useSandpack } from '@codesandbox/sandpack-react';
import { Tab } from './tab';
import type { SandpackFiles } from '@codesandbox/sandpack-react';

const AUTO_FILE_REGEX = /^\/File\d+\.jsx$/;
const prefix = '/File';
const suffix = '.jsx';

const getNextFileName = (files: SandpackFiles) => {
  const names = Object.keys(files);
  const autoFiles = names.filter((name) => AUTO_FILE_REGEX.test(name));
  const autoFilesNumbers = autoFiles.map((name) => {
    const number = name.slice(prefix.length, -suffix.length);
    return Number(number);
  });
  const lastAutoFileNumber = Math.max(0, ...autoFilesNumbers);

  return `${prefix}${lastAutoFileNumber + 1}${suffix}`;
};
const AddButton = () => {
  const { sandpack } = useSandpack();

  const nextFileName = getNextFileName(sandpack.files);

  return (
    <button
      className="hover:bg-gray-900 transition-[background-color] duration-300 border-b-2 border-transparent h-8 w-8 text-white"
      onClick={() => {
        sandpack.addFile(nextFileName, '', true);
        sandpack.openFile(nextFileName);
      }}
    >
      +
    </button>
  );
};
export const EditorTabs = () => {
  const { sandpack } = useSandpack();

  return (
    <div className="flex flex-wrap items-center w-full gap-2 flex-shrink-0 bg-gray-950 min-h-10 py-px">
      {sandpack.visibleFiles.map((file) => (
        <Tab key={file} name={file} isActive={sandpack.activeFile === file} />
      ))}
      <AddButton />
    </div>
  );
};
