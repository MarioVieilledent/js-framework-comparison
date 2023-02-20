
import styles from './MessageComponent.module.css';

const MessageComponent: any = (props: any) => {

    return <div class={styles.elem}>
          <span class={styles.message}>{props.message.message}</span>
          <span class={styles.date}>{props.message.date.toString()}</span>
          </div>;
}

export default MessageComponent;