import BookIcon from "./BookIcon.jsx";
import BackArrow from "./BackArrow.jsx";
import Mail from "./Mail.jsx";
import Lock from "./Lock.jsx";
import User from "./User.jsx";
const icons = {
    BookIcon: BookIcon,
    BackArrow: BackArrow,
    Mail: Mail,
    Lock: Lock,
    User : User
}

const Icon = ({ name, ...props }) => {
    const IconComponent = icons[name];

    return (
        <IconComponent

            height={props.height || 24}
            width={props.width || 24}
            strokeWidth={props.strokeWidth || 1.9}
            color={props.color || '#000000'}
        />
    )


}

export default Icon;