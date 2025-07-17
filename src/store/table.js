import { defineStore } from "pinia";

export const useTableStore = defineStore({
  id: "table",
  state: () => {
    return {
      tables : [
        {
          name: "โต๊ะที่ 1",
          checkin: "11.11",
          checkout: "",
          total: 111,
          users: 2,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 2",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 3",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 4",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 5",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 6",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 7",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 8",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 9",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },
        {
          name: "โต๊ะที่ 10",
          checkin: "",
          checkout: "",
          total: 0,
          users: 0,
          status: "ready",
          food: []
        },

      ]
    }
  },
  actions: {
    
  }
});
