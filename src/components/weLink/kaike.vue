<template>
  <div class="overK">
    <header class="headPlan">
      <i @click="doclick" data-url="weHead">&lt;</i>
      <h3>开课申请</h3>
      <p @click="allRead">全部已读</p>
    </header>
    <section class="BGbox">
      <ul class="listK" id="" v-if="!flag">
        <li
          v-for="item in list"
          :key="item.id"
          class="listK"
          :class="{ weilai: item.is_read == 1 }"
          @click="alread(item.t_message_pk)"
        >
          <div :class="{ weilai: item.is_read == 1 }"></div>
          <p>{{ item.title }}</p>
          <i>{{ item.update_time }}</i>
        </li>
      </ul>
      <p v-else class="kong">消息为空</p>
    </section>
  </div>
</template>

<script>
import { message, aleard } from "../../util/requers";
import { successAlert, warningAlert } from "../../util/alert";
export default {
  name: "kaike",
  data() {
    return {
      list: [],
      flag: false,
    };
  },
  methods: {
    allRead() {
      aleard().then((res) => {
        console.log(res);
        if (res.status > 1) {
          successAlert("操作成功！");
        } else {
          warningAlert("操作失败！");
        }
      });
    },
    doclick() {
      this.$router.replace({ name: "weHead" });
    },
    alread(pkid) {
      aleard({
        t_message_pk: pkid,
      }).then((res) => {
        console.log(res);
        if (res.status > 1) {
          successAlert("操作成功！");
        } else {
          warningAlert("操作失败！");
        }
      });
    },
  },
  mounted() {
    let token = localStorage.getItem("Authorization");
    if (!token) {
      this.$router.push("/otherLogin");
    } else {
      message({
        t_category_fk: this.$route.query.id,
      }).then((res) => {
        this.list = res.data.result_data;
        if (this.list == null || this.list == "") {
          this.flag = !this.flag;
        }
      });
    }
  },
};
</script>
<style scoped>
.overK {
  width: 100%;
  height: 100vh;
  background-color: #f3f2f2;
}
.headPlan {
  position: relative;
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
  border-bottom: solid 0.05rem #cccccc;
}
.headPlan i {
  position: absolute;
  font-size: 1.5rem;
  left: 1rem;
  top: 0.5rem;
}
.headPlan h3 {
  position: absolute;
  width: 5rem;
  left: calc(50% - 2.5rem);
  top: 0.5rem;
  font-weight: bold;
}
.headPlan p {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
}
.BGbox {
  background-color: #ffffff;
  position: relative;
}
.kong {
  position: absolute;
  height: 5rem;
  width: 8rem;
  font-size: 2rem;
  top: calc(50% - 2.5rem);
  left: calc(50% - 4rem);
  text-align: center;
  font-weight: bold;
}

.listK {
  width: 20rem;
  height: 15rem;
  margin: 0 auto;
}
.listK li {
  width: 20rem;
  height: 3rem;
  line-height: 3rem;
  border-bottom: solid #cccccc 0.01rem;
  position: relative;
  box-sizing: border-box;
}
.listK li div {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ff0000;
  border-radius: 0.5rem;
  top: calc(50% - 0.25rem);
}
.listK li p {
  position: absolute;
  left: 1.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #333;
}
.listK li i {
  position: absolute;
  right: 1rem;
  font-size: 0.7rem;
  color: #666;
}

.weilai {
  opacity: 0.3;
}

.chageBG {
  background-color: #999 !important;
}
</style>