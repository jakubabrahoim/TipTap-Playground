import { ReactNode } from 'react';

interface Props {
    executeCommand: () => void;
    children: ReactNode;
}

const EditorFixedMenuButton = ({ executeCommand, children }: Props) => {
    return (
        <button
            className='rounded-md border px-3 py-1 text-xs font-bold hover:bg-sky-100'
            onClick={executeCommand}
        >
            {children}
        </button>
    );
};

export default EditorFixedMenuButton;
