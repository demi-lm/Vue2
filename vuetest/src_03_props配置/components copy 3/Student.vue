<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ myAge }}</h2>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "欢迎",
      myAge: this.age,
    };
  },
  methods: {
    add() {
      this.myAge ++;
    },
  },
  //简单声明接收
  props: ["name", "sex", "age"],

  //接收的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String,
  // }

  //接收的同时对数据进行类型限制+默认值的制定+必要性的限制
  // props: {
  //   name: {
  //     type: String, //类型是字符串
  //     required: true, //名字必须传
  //   },
  //   age: {
  //     type: Number, //类型是数字
  //     default: 99, //默认是99岁
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>
