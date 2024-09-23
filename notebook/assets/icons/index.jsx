import BookIcon from "./BookIcon.jsx";
import BackArrow from "./BackArrow.jsx";
import Mail from "./Mail.jsx";
import Lock from "./Lock.jsx";
import User from "./User.jsx";
import QuickNote from "./QuickNote.jsx";
import HomeIcon from "./HomeIcon.jsx";
import AddIcon from "./AddIcon.jsx";
import SearchIcon from "./SearchIcon.jsx";
import AiIcon from "./AiIcon.jsx";

const icons = {
    BookIcon: BookIcon,
    BackArrow: BackArrow,
    Mail: Mail,
    Lock: Lock,
    User: User,
    QuickNote: QuickNote,
    HomeIcon: HomeIcon,
    AddIcon: AddIcon,
    AiIcon: AiIcon,
    // EditIcon: EditIcon,
    // DeleteIcon: DeleteIcon,
    SearchIcon: SearchIcon,
    // SettingsIcon: SettingsIcon,




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