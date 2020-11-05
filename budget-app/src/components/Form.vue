<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" lable-position="top">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption lable="Income" value="INCOME" />
          <ElOption lable="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 0,
      },
    rules: {
      type: [
        { required: true, message: "Please select type", trigger: "blur" }
      ],
      comment: [
        { required: true, message: "Please input comment", trigger: "change" }
      ],
      value: [
        { required: true, message: "Please input value", trigger: "change" },
        { type: "number", message: "Value must be a number", trigger: "change" }
      ]
    }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid)=> {
        if (valid) {
          this.$emit('submitForm', {...this.formData});
          this.$refs.addItemForm.resetFields();
        }
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>