import styled from 'styled-components';
import Responsive from "@/components/common/Responsive";
import QuillEditor from '@/components/editor/QuillEditor';
import ActionButtons from '@/components/post/ActionButtons';


const EditorBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;
const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #ced4da;
    margin-bottom: 2rem;
    width: 100%
`;

const Write = () => {
    return (
        <Responsive>
            <EditorBlock>
                <TitleInput placeholder="제목을 입력하세요" />
                <QuillEditor />
                <ActionButtons />
            </EditorBlock>
        </Responsive>
    );
};

export default Write;