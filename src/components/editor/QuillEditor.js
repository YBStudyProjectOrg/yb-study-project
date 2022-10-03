import { useRef, useEffect } from "react";
import Quill from 'quill';      // yarn add quill
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';

const QuillWrapper = styled.div`
    .ql-editor {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::before {
        left: 0px;
    }
`;

const QuillEditor = () => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성하세요...',
            modules: {
                toolbar: [
                    [{header: '1'}, {header: '2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image']
                ]
            }
        });
    }, []);

    return (
        <QuillWrapper>
            <div ref={quillElement} />
        </QuillWrapper>
    );
};

export default QuillEditor;