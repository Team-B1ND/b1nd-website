import * as S from "./style";
import { ArrowLeft, DodamFilledButton } from "@b1nd/dds-web";

interface BottomBarProps {
    onPublish: () => void;
    onExit: () => void;
    isLoading: boolean;
  }

const BottomBar = ({ onPublish, onExit, isLoading }: BottomBarProps) => {
    return (
        <S.BottomBar>
            <S.ExitButton onClick={onExit}>
                <ArrowLeft color="labelNormal" />
                <span>나가기</span>
            </S.ExitButton>
            <DodamFilledButton
                width={112}
                size="Large"
                backgroundColorType="Primary"
                
                onClick={()=>onPublish}
            >
            {isLoading ? "출간 중..." : "출간하기"}
            </DodamFilledButton>
        </S.BottomBar>
    );
};

export default BottomBar;
