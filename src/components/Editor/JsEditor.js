import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-min-noconflict/ext-language_tools";
export default function JsEditor() {
    return (
        <AceEditor
            placeholder="Write your JavaScript codes here!"
            mode="javascript"
            theme="monokai"
            name="editor_js" 
            fontSize="16"
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion:true,
                enableLiveAutocompletion:true,
                enableSnippets:true,
                showGutter:true,
                showLineNumbers:true,
                tabSize:2
            }}
      />
    )
}
