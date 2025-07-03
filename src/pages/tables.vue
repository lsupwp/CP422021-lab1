<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
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
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center"> <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 1</p>
            </div>
          </v-btn>
        </VCol>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center">
              <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 2</p>
            </div>
          </v-btn>
        </VCol>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center">
              <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 3</p>
            </div>
          </v-btn>
        </VCol>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center">
              <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 4</p>
            </div>
          </v-btn>
        </VCol>
      </VRow>

      <VRow>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center"> <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 5</p>
            </div>
          </v-btn>
        </VCol>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center">
              <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 6</p>
            </div>
          </v-btn>
        </VCol>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center">
              <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 7</p>
            </div>
          </v-btn>
        </VCol>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center">
              <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 8</p>
            </div>
          </v-btn>
        </VCol>
      </VRow>

      <VRow>
        <VCol cols="3">
          <v-btn style="block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center"> <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 9</p>
            </div>
          </v-btn>
        </VCol>
        <VCol cols="3">
          <v-btn style=" block-size: 200px; inline-size: 400px;" color="#8A2BE2" text-color="white">
            <div class="d-flex align-center">
              <v-icon icon="mdi-table" size="x-large" class="me-2"></v-icon>
              <p class="ma-0">โต๊ะที่ 10</p>
            </div>
          </v-btn>
        </VCol>
      </VRow>


    </VCardText>
  </VCard>
</template>
