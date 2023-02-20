<script lang="ts">
  export let message: any;
</script>

<div class="elem">
  <span class="message">{message.message}</span>
  <span class="date">{message.date.toString()}</span>
</div>

<style>
  .elem {
    display: flex;
    align-items: center;
  }

  .message {
    font-weight: 400;
    margin-right: 12px;
  }

  .date {
    color: #999;
    font-size: 14px;
  }
</style>
