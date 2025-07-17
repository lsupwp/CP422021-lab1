<script setup>

import InfoCard from "@/components/cards/InfoCard.vue";
import { useTableStore } from "@/store/table";
import TableInfoCard from "@/components/cards/TableInfoCard.vue";

function getFormattedDateTime(dateObject) {
  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const year = dateObject.getFullYear();
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  const seconds = String(dateObject.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year}:${hours}:${minutes}:${seconds}`;
}

const tableStore = useTableStore();
const reserveTable = (table) => {
  table.status = 'reserve'
  table.checkin = getFormattedDateTime(new Date());
}

</script>
<template>
  <VCard>
    <VCardItem>
      <VCardTitle>โต๊ะในร้าน</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow>
        <VCol cols="3">
          <InfoCard title="โต๊ะทั้งหมด" :stats="10" unit="ตัว" icon="mdi-table" color="primary" />
        </VCol>
        <VCol cols="3">
          <InfoCard title="โต๊ะว่าง" :stats="5" unit="ตัว" icon="mdi-table-plus" color="success" />
        </VCol>
        <VCol cols="3">
          <InfoCard title="ใช้งานอยู่" :stats="5" unit="ตัว" icon="mdi-table-account" color="warning" />
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn class="fill-height" variant="text" block text>
              <VIcon>mdi-plus</VIcon>
              เพิมโต๊ะใหม่
            </VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
  <VCard class="mt-8">
    <VCardText>

      <VRow>
        <VCol v-for="table in tableStore.tables" cols="3">
          <v-btn v-if="table.status == 'ready'" @click="reserveTable(table)" style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center"> <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">{{table.name}} - {{ table.status }}</p>
            </div>
          </v-btn>
          <TableInfoCard v-else :table ="table"/>
        </VCol>
      </VRow>

    </VCardText>
  </VCard>
</template>
