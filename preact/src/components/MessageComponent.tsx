import './MessageComponent.css';

export default function MessageComponent(props: any) {
    return <div className="elem">
        <span className="message">{props.message.message}</span>
        <span className="date">{props.message.date.toString()}</span>
    </div>;
};

