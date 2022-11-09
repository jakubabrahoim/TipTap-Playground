import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import Heading from '@tiptap/extension-heading';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import Typography from '@tiptap/extension-typography';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import HorizontalRule from '@tiptap/extension-horizontal-rule';

export const useEditorExtensions = () => {
    const extensions = [
        Document,
        Paragraph,
        Text,
        Bold.configure({ HTMLAttributes: { class: 'font-extrabold' } }),
        Italic,
        Strike,
        Code,
        CodeBlock,
        Heading.configure({
            levels: [1, 2, 3, 4],
        }),
        Blockquote,
        BulletList.configure({
            itemTypeName: 'listItem',
            HTMLAttributes: {
                class: '!list-disc',
            },
        }),
        OrderedList.configure({
            itemTypeName: 'listItem',
            HTMLAttributes: {
                class: '!list-decimal',
            },
        }),
        ListItem,
        BubbleMenu,
        Typography,
        TaskItem,
        TaskList,
        HorizontalRule,
    ];

    return {
        extensions,
    }
}