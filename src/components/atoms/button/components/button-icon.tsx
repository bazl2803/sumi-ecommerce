import { TablerIcon } from '@tabler/icons-react';

interface ButtonIconProps {
    icon: TablerIcon;
    size?: number;
}

export const ButtonIcon = ({ icon: Icon, size = 20 }: ButtonIconProps) => {
    return <Icon size={size} />;
};
