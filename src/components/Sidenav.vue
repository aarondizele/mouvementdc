<template>
  <div class="sidenav">
    <a class="closebtn" @click="closeNav">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav() {
      return this.$emit("closeNav");
    }
  }
};
</script>