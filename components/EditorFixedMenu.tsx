import { Editor } from '@tiptap/react';
import { EditorCommand } from '../types/editor';

interface Props {
    editor: Editor;
}

const EditorFixedMenu = ({ editor }: Props) => {
    const executeCommand = (command: EditorCommand) => {
        switch (command) {
            case 'BulletList':
                editor?.chain().focus().toggleBulletList().run();
                break;
            case 'OrderedList':
                editor?.chain().focus().toggleOrderedList().run();
                break;
            case 'Bold':
                editor?.chain().focus().toggleBold().run();
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <p className='mb-2 text-sm font-bold underline'>Fixed menu</p>
            <div className='mb-4 flex gap-2'>
                <button
                    className='rounded-md border px-3 py-1 text-xs font-bold hover:bg-sky-100'
                    onClick={() => executeCommand('BulletList')}
                >
                    Bullet
                </button>
                <button
                    className='rounded-md border px-3 py-1 text-xs font-bold hover:bg-sky-100'
                    onClick={() => executeCommand('OrderedList')}
                >
                    Numbered
                </button>
                <button
                    className='rounded-md border px-3 py-1 text-xs font-bold hover:bg-sky-100'
                    onClick={() => executeCommand('Bold')}
                >
                    Bold
                </button>
            </div>
        </div>
    );
};

export default EditorFixedMenu;
