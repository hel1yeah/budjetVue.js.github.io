<template>
  <el-card class="form-card">
    <el-form :model="formData"> 
    <el-form-item lable="Type" prop="type">
      <el-select class="type-select" v-model="formData.type" placeholder="Choos type ...">
        <el-option label="Income" value="INCOME" />
        <el-option label="Outcome" value="OUTCOME" />
      </el-select>
    </el-form-item>
    <el-form-item lable="Comments" prop="comment">
      <el-input v-model="formData.comment" />
    </el-form-item>
    <el-form-item lable="Value" prop="value">
      <el-input v-model.number="formData.value" />
    </el-form-item>
    <el-button @click="onSubmit" type="primary">Submit</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 0,
      },
    };
  },
  methods: {
    onSubmit(){

    }
  },
};
</script>

<style lang="scss" scoped>
.form-card{
  max-width: 500px;
  margin: auto;
}
.type-select{
  width: 100%;
}
</style>