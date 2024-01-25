import {MESSAGES} from '../utils/constants';
import '../css/Status.css';

function Message({ message }) {
    const displayMessage = MESSAGES[message] || 'Successful';

    return (
        <div className="status">
            {message && displayMessage}
        </div>
    )
}

export default Message;  