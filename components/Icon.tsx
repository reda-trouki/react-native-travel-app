import { Feather } from '@expo/vector-icons';


type IconProps = {
    name: keyof typeof Feather.glyphMap;
    color: string;
    size: number;
};
const Icon = ({ name, color, size }:IconProps) => {
    return (
        <Feather  name={name} size={size} color={color} />
    );
}

export default Icon;