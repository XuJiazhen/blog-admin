<template>
  <div id="markdown-editor"></div>
</template>

<script>
import Editor from '@toast-ui/editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

export default {
  name: 'MarkdownEditor',
  data() {
    return {
      editor: null,
    };
  },
  methods: {
    initEditor() {
      this.editor = new Editor({
        el: document.querySelector('#markdown-editor'),
        initialEditType: 'markdown',
        height: '300px',
        previewStyle: 'vertical',
        minHeight: '300px',
        language: 'en_US',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: false,
        hideModeSwitch: false,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock',
        ],
      });
    },
  },
};
</script>

<style></style>
