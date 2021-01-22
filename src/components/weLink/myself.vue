<template>
  <div class="allbox2">
    <header class="head2">
      <i @click="$router.push('weHead')">&lt;</i>
      <h3>个人设置</h3>
      <em @click="dofinal" data-url="weHead">完成</em>
    </header>
    <section class="touxiangL">
      <p class="textp">头像</p>
      <div :style="{ backgroundImage: 'url(' + input.headImg + ')' }"></div>
      <i>&gt;</i>
    </section>
    <ul class="meselfIN">
      <li>
        <p class="textp">昵称</p>
        <el-input
          placeholder="请输入内容"
          v-model="input.name"
          clearable
          class="texti"
        >
        </el-input>
      </li>
      <li>
        <p class="textp">性别</p>
        <el-select v-model.lazy="input.sex" placeholder="请选择" class="texti">
          <el-option value="男">男</el-option>
          <el-option value="女">女</el-option>
        </el-select>
      </li>
      <li>
        <p class="textp">班级</p>
        <el-input
          placeholder="请输入内容"
          v-model.lazy="input.grade"
          clearable
          class="texti"
          readonly="readonly"
        >
        </el-input>
      </li>
    </ul>

    <section class="psW">
      <p class="textp">密码</p>

      <i class="texti" @click="dochangeUrl" data-url="updatePsw">修改 </i>
      <b @click="dochangeUrl" data-url="updatePsw">&gt;</b>
    </section>

    <footer class="meselffoo" @click="tuichu">退出登录</footer>
  </div>
</template>

<script>
import { changeUrl } from "../../util/nomalway";
import { successAlert, warningAlert } from "../../util/alert";
import { uodate } from "../../util/requers";
export default {
  name: "myselef",
  data() {
    return {
      Student: "",
      input: {
        headImg: require("../../../static/img/五六七.jpg"),
        name: "",
        sex: "",
        grade: "花艺班",
      },
    };
  },
  methods: {
    dochangeUrl() {
      changeUrl();
    },
    dofinal() {
      uodate({
        describe: "",
        true_name: "",
        head_img: "",
        user_name: this.input.name,
        sex: this.input.sex == "男" ? 1 : 2,
      }).then((res) => {
        if (res.data.status == 1) {
          successAlert("修改成功！");
          localStorage.removeItem("infomation");
          this.Student.user_name = this.input.name;
          this.Student.sex = this.input.sex == "男" ? 1 : 2;
          localStorage.setItem("infomation", JSON.stringify(this.Student));
        } else {
          warningAlert("修改失败！");
        }
      });
    },
    tuichu() {
      localStorage.removeItem("infomation");
      localStorage.removeItem("Authorization");
      this.$router.replace("weHead");
    },
  },
  mounted() {
    this.Student = JSON.parse(localStorage.getItem("infomation"));
    if (this.Student == "" || this.Student == null) {
      console.log("没有数据");
    } else {
      this.input.headImg = this.Student.head_img;
      this.input.name = this.Student.user_name;
      if (this.Student.sex == 1) {
        this.input.sex = "男";
      } else {
        this.input.sex = "女";
      }
    }
  },
};
</script>
<style scoped>
.allbox2 {
  width: 100%;
  height: 100vh;
  background-color: #f3f2f2;
  color: #464646;
}
.head2 {
  position: relative;
  width: 100%;
  height: 3rem;
  border-bottom: solid #cccccc 0.05rem;
  background-color: #ffffff;
}
.head2 i {
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  display: inline-block;
  font-size: 1.5rem;
}
.head2 h3 {
  position: absolute;
  width: 5rem;
  top: 0.5rem;
  font-weight: 700;
  color: #000000;
  left: calc(50% - 2.5rem);
}
.head2 em {
  position: absolute;
  right: 1rem;
  top: 0.6rem;
  font-weight: 600;
}
.touxiangL {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  position: relative;
}
.textp {
  position: absolute;
  left: 1rem;
  font-size: 1.2rem;
}
.touxiangL div {
  position: absolute;
  right: 2rem;
  top: 0.6rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2.5rem;
  background: url("../../img/五六七.jpg") no-repeat;
  background-size: 100% 100%;
}
.touxiangL i {
  position: absolute;
  right: 1rem;
  font-size: 1.2rem;
}
.meselfIN {
  width: 100%;
  height: 12rem;
  background-color: #ffffff;
}
.meselfIN li {
  position: relative;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
}
.texti {
  position: absolute;
  width: 10rem;
  right: 1rem;
  font-size: 0.8rem;
  border: 0;
  text-align: center;
}
.psW {
  position: relative;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  top: 1rem;
  background-color: #ffffff;
}
.psW i {
  right: 1.5rem;
}
.psW b {
  position: absolute;
  right: 0.8rem;
  font-size: 1rem;
}

.meselffoo {
  width: 20rem;
  height: 3rem;
  border: solid 0.01rem #cccccc;
  border-radius: 1.5rem;
  position: fixed;
  left: calc(50% - 10rem);
  bottom: 2rem;
  line-height: 3rem;
  text-align: center;
  color: #cccccc;
  font-weight: bold;
  opacity: 0.8;
}
</style>