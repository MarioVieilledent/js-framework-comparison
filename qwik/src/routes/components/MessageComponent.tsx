import { component$ } from '@builder.io/qwik';
import './MessageComponent.css';

export default component$((props: any) => {
    return <div class="elem">
        <span class="message">{props.message.message}</span>
        <span class="date">{props.message.date.toString()}</span>
    </div>;
});