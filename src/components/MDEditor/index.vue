<template>
  <div id="editor"></div>
</template>

<script>
import Editor from '@toast-ui/editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
export default {
  name: 'Editor',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      editor: null,
    };
  },
  mounted () {
    this.initEditor();
  },
  destroyed () {
    this.destroyEditor();
  },
  methods: {
    initEditor () {
      this.editor = new Editor({
        el: document.querySelector('#editor'),
        height: '400px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
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
      if (this.value) {
        this.editor.setMarkdown(this.value);
      }
      this.editor.on('change', () => {
        this.$emit('input', this.editor.getHtml());
      });
    },
    destroyEditor () {
      if (!this.editor) return;
      this.editor.off('change');
      this.editor.remove();
    },
    getHtml () {
      return this.editor.getHtml();
    },
  },
  // watch: {
  //   value(val, oldVal) {
  //     if (val !== oldVal && val !== this.editor.getMarkdown()) {
  //       this.editor.setMarkdown(val);
  //     }
  //   },
  // },
};
</script>

<style></style>
