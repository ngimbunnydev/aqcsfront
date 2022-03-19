<template>
  <div class="page">
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
  </div>
</template>
<script>
export default {
  name: "Loading",
  data() {
    return {
      appjs: window.appjs,
    };
  },
  async mounted() {
    //console.log('loading...');
    const internet = await this.appjs.checkOnlineStatus();
    if (internet) {
      await this.$store.dispatch("restApiGetLang");
       this.$store.dispatch("restIndexData");
      this.$router.replace({ path: "/home" });
    }


  },

};
</script>

<style scoped>
.page {
  position: absolute;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  top: 10%;
}
</style>
