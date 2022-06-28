<template>
  <el-row>
    <el-col :span="12">
      <el-form :label-position="'left'" :model="form" label-width="240px">
        <el-form-item label="Название">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Заводской №">
          <el-input v-model="form.serialNumber" />
        </el-form-item>
        <el-form-item label="Инвертарный №">
          <el-input v-model="form.invertNumber" />
        </el-form-item>
        <el-form-item label="Тип оборудования">
          <el-select v-model="form.type" placeholder="Выберите тип">
            <el-option label="ИО" value="shanghai" />
            <el-option label="СИ" value="shanghai" />
            <el-option label="ВО" value="beijing" />
            <el-option label="Без типа" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Штук в комплекте">
          <el-input-number v-model="form.quantity" :step="1" />
        </el-form-item>
        <el-form-item label="Номер паспорта">
          <el-input v-model="form.passportId" />
        </el-form-item>
        <el-form-item label="Состояние">
          <el-select v-model="form.state" placeholder="Выберите состояние">
            <el-option label="Исправен" value="shanghai" />
            <el-option label="Неисправен" value="shanghai" />
            <el-option label="В ремонте" value="beijing" />
            <el-option label="Выведен из эксплуатации" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Местоположение">
          <el-select
            v-model="form.location"
            placeholder="Где находится прибор?"
          >
            <el-option label="ЦСЛ" value="shanghai" />
            <el-option label="Пост №1" value="shanghai" />
            <el-option label="Пост №2" value="beijing" />
            <el-option label="Пост №3" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Дата покупки">
          <el-date-picker
            v-model="form.buyDate"
            :size="'normal'"
            placeholder="Выберите дату покупки"
            type="date"
          />
        </el-form-item>
        <el-form-item label="Дата аттестации">
          <el-date-picker
            v-model="form.certificationDate"
            :size="size"
            placeholder="Выберите дату аттестации"
            type="date"
          />
        </el-form-item>
        <el-form-item :span="21" label="Периодичность аттестации (мес)">
          <el-input-number v-model="form.certificationPeriod" :step="2" />
        </el-form-item>
        <el-form-item label="Прибор для выездов">
          <el-switch v-model="form.visiting" />
        </el-form-item>
        <el-form-item label="Тип испытаний">
          <el-checkbox-group v-model="form.typeTest">
            <el-checkbox label="Каменные материалы" name="type" />
            <el-checkbox label="Асфальтобетон" name="type" />
            <el-checkbox label="Бетон" name="type" />
            <el-checkbox label="Грунт" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Дополнительная информация">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Добавить</el-button>
          <el-button>Отменить</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import axios from "axios";

const form = reactive({
  name: "",
  serialNumber: "",
  invertNumber: "",
  passportId: "",
  state: "",
  location: "1",
  buyDate: Date,
  certificationDate: Date,
  certificationPeriod: "",
  quantity: Number,
  visiting: false,
  type: [],
  typeTest: [],
  desc: "",
});

const onSubmit = () => {
  console.log("submit!", form);
  // const axios: any = inject("axios");
  axios.post("http://localhost:3000/api/equipment/", form);
};
</script>
