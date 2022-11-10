import { Editor } from '@tiptap/react';
import { EditorCommand } from '../../types/editorTypes';
import EditorFixedMenuButton from './EditorFixedMenuButton';

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
            case 'Italic':
                editor?.chain().focus().toggleItalic().run();
                break;
            case 'Underline':
                editor?.chain().focus().toggleUnderline().run();
                break;
            case 'Strike':
                editor?.chain().focus().toggleStrike().run();
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <p className='mb-2 text-sm font-bold underline'>Fixed menu</p>
            <div className='mb-4 flex gap-2'>
                <EditorFixedMenuButton
                    executeCommand={() => executeCommand('BulletList')}
                >
                    Bullet list
                </EditorFixedMenuButton>
                <EditorFixedMenuButton
                    executeCommand={() => executeCommand('OrderedList')}
                >
                    Ordered list
                </EditorFixedMenuButton>
                <EditorFixedMenuButton
                    executeCommand={() => executeCommand('Bold')}
                >
                    Bold
                </EditorFixedMenuButton>
                <EditorFixedMenuButton
                    executeCommand={() => executeCommand('Italic')}
                >
                    Italic
                </EditorFixedMenuButton>
                <EditorFixedMenuButton
                    executeCommand={() => executeCommand('Underline')}
                >
                    Underline
                </EditorFixedMenuButton>
            </div>
        </div>
    );
};

export default EditorFixedMenu;
