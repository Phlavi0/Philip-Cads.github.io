<template>
  <div>
    <button @click="generateGuid">Generate GUID</button>
    <p>{{ guid }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guid: ''
    };
  },
  methods: {
    generateGuid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
      this.guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
  }
};
</script>
