import { useEditor, EditorContent } from '@tiptap/react';
import { useEditorExtensions } from '../../hooks/useEditorExtensions';
import EditorFixedMenu from './EditorFixedMenu';

const Editor = () => {
    const { extensions } = useEditorExtensions();

    const editor = useEditor({
        extensions: extensions,
        content:
            '<ul><li>First item</li><li>Second item</li></ul><ol><li>1st ol item</li></ol>',
        editorProps: {
            attributes: {
                class: 'outline-none border rounded-md p-2',
            },
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className='w-1/2'>
            <EditorFixedMenu editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default Editor;
