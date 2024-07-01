<template>
  <div>
    <h1>学生管理系统</h1>
    <StudentList />
  </div>
</template>

<script>
import StudentList from "../components/StudentList.vue";

export default {
  components: {
    StudentList,
  },
};
</script>
