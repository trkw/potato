<template>

  <div v-if="errors && errors.length" class="alert is-error">
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>

</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .alert{
    background: var(--color-message);
    padding: var(--space-1);
    text-align: center;
    z-index: 11;
    & ul{
      margin: 0;
      list-style: none;
      & li{
        padding: 4px;
      }
    }
    &.is-message{
      background: var(--color-message);
      color:var(--grey2);
    }
    &.is-error{
      background: var(--color-error);
      color:var(--white);
    }
    &.is-success{
      background: var(--color-success);
      color:var(--white);
    }
  }
</style>
