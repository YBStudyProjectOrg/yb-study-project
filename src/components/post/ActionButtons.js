import styled from 'styled-components';
import Button from '../common/Button';

const ActionButtonsBlock = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: 0.5rem;
    }
`;

const StyledButton = styled(Button)`
    height: 2.125ref;
    & + & {
        margin-left: 0.5rem;
    }
`;

const ActionButtons = ({ onCancel, onPublish }) => {
    return (
        <ActionButtonsBlock>
            <StyledButton cyan onClick={onPublish}>
                포스트 등록
            </StyledButton>
            <StyledButton onClick={onCancel}>
                취소
            </StyledButton>
        </ActionButtonsBlock>
    );
};

export default ActionButtons;