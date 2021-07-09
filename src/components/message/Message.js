import "./Message.css";
import {format} from "timeago.js";

export default function Message({message,own}) {
    return (
        <div className={own?"message own":"message"}>
            <div className="messageTop">
                <img 
                    className="messageImg"
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <p className="messageText">{message}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)} </div>
        </div>
    )
}
