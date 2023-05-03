<template>
  <div>
    <h2 >学校名称:{{ name |mySlice}}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "北大dksalgffdlkjavf",
      address: "北京",
    };
  },
};
</script>
