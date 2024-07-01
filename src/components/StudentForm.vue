<template>
  <div>
    <h3>{{ isEdit ? "编辑学生" : "添加学生" }}</h3>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">名字:</label>
        <input v-model="student.name" id="name" required />
      </div>
      <div>
        <label for="age">年龄:</label>
        <input v-model="student.age" id="age" required type="number" />
      </div>
      <div>
        <label for="gender">性别:</label>
        <select v-model="student.gender" id="gender" required>
          <option value="Male">女性</option>
          <option value="Female">男性</option>
        </select>
      </div>
      <div>
        <label for="class">班级:</label>
        <input v-model="student.class" id="class" required />
      </div>
      <div>
        <label for="email">电子邮件:</label>
        <input v-model="student.email" id="email" required type="email" />
      </div>
      <button type="submit">{{ isEdit ? "更新" : "添加" }}</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    studentData: Object,
    isEdit: Boolean,
  },
  data() {
    return {
      student: {
        name: "",
        age: "",
        gender: "",
        class: "",
        email: "",
      },
    };
  },
  watch: {
    studentData: {
      immediate: true,
      handler(val) {
        if (val) {
          this.student = { ...val };
        }
      },
    },
  },
  methods: {
    submitForm() {
      this.$emit("submit", this.student);
    },
  },
};
</script>
