<template>
  <div>
    <button @click="showAddForm">添加学生</button>
    <div>
      <label for="search">搜索:</label>
      <input v-model="searchQuery" id="search" @input="filterStudents" />
    </div>
    <ul>
      <li v-for="student in filteredStudents" :key="student.id">
        {{ student.name }} - {{ student.age }} - {{ student.gender }} -
        {{ student.class }} - {{ student.email }}
        <button @click="editStudent(student)">修改</button>
        <button @click="viewDetails(student)">查看详细信息</button>
        <button @click="deleteStudent(student.id)">删除</button>
      </li>
    </ul>
    <StudentForm
      v-if="showForm"
      :studentData="selectedStudent"
      :isEdit="isEdit"
      @submit="handleFormSubmit"
    />
    <StudentDetail
      v-if="showDetail"
      :student="selectedStudent"
      @close="closeDetail"
    />
  </div>
</template>

<script>
import StudentForm from "./StudentForm.vue";
import StudentDetail from "./StudentDetail.vue";

export default {
  components: {
    StudentForm,
    StudentDetail,
  },
  data() {
    return {
      students: [],
      showForm: false,
      showDetail: false,
      selectedStudent: null,
      isEdit: false,
      searchQuery: "",
      filteredStudents: [],
    };
  },
  methods: {
    showAddForm() {
      this.isEdit = false;
      this.selectedStudent = null;
      this.showForm = true;
    },
    handleFormSubmit(student) {
      if (this.isEdit) {
        const index = this.students.findIndex((s) => s.id === student.id);
        if (index !== -1) {
          this.students.splice(index, 1, student);
        }
      } else {
        student.id = Date.now();
        this.students.push(student);
      }
      this.showForm = false;
      this.filterStudents();
    },
    editStudent(student) {
      this.isEdit = true;
      this.selectedStudent = student;
      this.showForm = true;
    },
    deleteStudent(id) {
      this.students = this.students.filter((student) => student.id !== id);
      this.filterStudents();
    },
    viewDetails(student) {
      this.selectedStudent = student;
      this.showDetail = true;
    },
    closeDetail() {
      this.showDetail = false;
      this.selectedStudent = null;
    },
    filterStudents() {
      this.filteredStudents = this.students.filter((student) => {
        return Object.values(student).some((value) =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
  mounted() {
    this.filterStudents();
  },
};
</script>
