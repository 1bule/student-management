<template>
  <div>
    <h3>学生信息</h3>

    <p>名字: {{ student.name }}</p>
    <p>年龄: {{ student.age }}</p>
    <p>性别: {{ student.gender }}</p>
    <p>班级: {{ student.class }}</p>
    <p>邮箱: {{ student.email }}</p>
    <button @click="$emit('close')">关闭</button>
  </div>
</template>

<script>
// 显示学生详细信息的组件
export default {
  props: {
    student: Object,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
