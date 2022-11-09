import { useEditor, EditorContent } from '@tiptap/react';
import { useEditorExtensions } from '../hooks/useEditorExtensions';

const Editor = () => {
    const { extensions } = useEditorExtensions();

    const editor = useEditor({
        extensions: extensions,
        content: '<ul><li>First item</li><li>Second item</li></ul>',
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
            <p className='mb-2 text-sm font-bold underline'>Fixed menu</p>
            <div className='mb-4 flex gap-2'>
                <button
                    className='rounded-md border px-3 py-1 text-xs font-bold hover:bg-sky-100'
                    onClick={() =>
                        editor?.chain().focus().toggleBulletList().run()
                    }
                >
                    Bullet
                </button>
                <button
                    className='rounded-md border px-3 py-1 text-xs font-bold hover:bg-sky-100'
                    onClick={() =>
                        editor?.chain().focus().toggleOrderedList().run()
                    }
                >
                    Numbered
                </button>
                <button
                    className='rounded-md border px-3 py-1 text-xs font-bold hover:bg-sky-100'
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                    Bold
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
};

export default Editor;
