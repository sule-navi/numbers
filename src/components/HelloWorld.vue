<!--
 * @Author: Sule
 * @Date: 2020-04-13 14:12:11
 * @LastEditors: Sule
 * @LastEditTime: 2020-12-10 15:53:57
 * @Description:
 -->
<template>
  <el-container style="height:100%">
    <el-header style>
      <h1 style="text-align: center;margin-top: 20px;">Number Is Number</h1>
      <h5 style="text-align: center;margin-top: 5px;font-weight: normal;">author: sure</h5>
      <div style="position: fixed;right: 40px;z-index: 99;">
         <el-input-number v-model="num" controls-position="right" :min="0" :max="9" style="width: 110px;"></el-input-number>
        <el-button type="primary" @click="changeNumber">Push</el-button>
        <el-button type="danger" @click="Delete">Delete Last</el-button>
      </div>
    </el-header>
    <el-main style="height:100%"  class="ui">
      <div class="numbertable" id="numbertable"></div>
      <div style="width:100%; height:50%">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import auth from "@/utils/auth";
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 0,
      nums: [], // 全部
      viewnums: [], // 近100
      viewnums200: [],  // 近200
      num1: '',  // 近1位数
      num2: '',  // 近2位数
      num3: '',  // 近3位数
      user: null,
    }
  },
  created() {
    this.user = auth.getSessionStorage('user');
    this.nums = auth.getLocalStorage("nums", this.user) || [];
    const arr = this.nums.concat().reverse();
    this.viewnums = arr.slice(0, 100);
    this.viewnums200 = arr.slice(0, 200);
    this.viewnums.reverse();
    this.viewnums200.reverse();
    this.num1 = this.viewnums.length ? this.viewnums[this.viewnums.length - 1] + '' : "";
    this.num2 = this.viewnums.length > 1 ? this.viewnums[this.viewnums.length - 2] + '' + this.viewnums[this.viewnums.length - 1] : "";
    this.num3 = this.viewnums.length > 2 ? this.viewnums[this.viewnums.length - 3] + '' + this.viewnums[this.viewnums.length - 2] + '' + this.viewnums[this.viewnums.length - 1] : '';
  },
  mounted () {
   this.drawLine();
   this.drawBar1();
   this.drawBar2();
   this.drawBar3();
  },
   methods: {
     Delete() {
       if (!this.nums.length) {
         return;
       }
       this.$confirm('是否要删除上一轮数字?', '提示', {
          confirmButtonText: 'yes',
          cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          this.nums.pop();
       const arr = this.nums.concat().reverse();
       this.viewnums = arr.slice(0, 100);
       this.viewnums200 = arr.slice(0, 200);
       this.viewnums.reverse();
       this.viewnums200.reverse();
       auth.setLocalStorage("nums", this.nums, this.user);
       this.num1 = this.viewnums.length ? this.viewnums[this.viewnums.length - 1] + '' : "";
       this.num2 = this.viewnums.length > 1 ? this.viewnums[this.viewnums.length - 2] + '' + this.viewnums[this.viewnums.length - 1] : "";
       this.num3 = this.viewnums.length > 2 ? this.viewnums[this.viewnums.length - 3] + '' + this.viewnums[this.viewnums.length - 2] + '' + this.viewnums[this.viewnums.length - 1] : '';
       this.drawLine();
       this.drawBar1();
       this.drawBar2();
       this.drawBar3();
        }).catch(() => {
        });
     },
     changeNumber() {
       this.nums.push(this.num);
       if (this.nums.length > 2500) { // 存总入数量控制
         this.nums.shift();
       }
       const arr = this.nums.concat().reverse();
       this.viewnums = arr.slice(0, 100);
       this.viewnums200 = arr.slice(0, 200);
       this.viewnums.reverse();
       this.viewnums200.reverse();
       auth.setLocalStorage("nums", this.nums, this.user);
       this.num1 = this.viewnums[this.viewnums.length - 1] + '';
       this.num2 = this.viewnums.length > 1 ? this.viewnums[this.viewnums.length - 2] + '' + this.viewnums[this.viewnums.length - 1] : "";
       this.num3 = this.viewnums.length > 2 ? this.viewnums[this.viewnums.length - 3] + '' + this.viewnums[this.viewnums.length - 2] + '' + this.viewnums[this.viewnums.length - 1] : '';
       this.drawLine();
       this.drawBar1();
       this.drawBar2();
       this.drawBar3();
       this.num = 0;
     },
    drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts(document.getElementById('numbertable'))
        // 绘制图表
        myChart.setOption({
            title: { text: '近100轮' },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            xAxis: {
                data: this.viewnums.map((e,i) => {
                  return i + 1 + '轮';
                })
            },
            yAxis: {
              maxInterval: 1,
              minInterval: 1,
              type: 'value',
              minorTick: {
                lineStyle: { color: 'blue',  opacity: 1}
              }
            },
            series: [{
                name: '本轮',
                type: 'line',
                data: this.viewnums,
                label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
                markLine: {
                  data: [
                    {type: 'average', name: '平均值'}
                  ]
                }
            }]
        });
    },
    drawBar1() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts(document.getElementById('bar1'));
        const data200 = this.toData(this.num1, this.viewnums200, []);
        const dataAll = this.toData(this.num1, this.nums, []);
        // 绘制图表
        myChart.setOption({
            title: { text: '近1轮数: ' + this.num1 },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['近200轮内', '历史全部']
            },
            toolbox: {
              show: true,
              feature: {
                magicType: {show: true, type: ['line', 'bar']},
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
              }
            ],
            yAxis: {
              type: 'value',
              minorTick: {
                lineStyle: { color: 'blue',  opacity: 1}
              }
            },
            series: [
              {
                  name: '近200轮内',
                  type: 'bar',
                  data: data200,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name: '历史全部',
                  type: 'bar',
                  data: dataAll,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              }
            ]
        });
    },
    drawBar2() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts(document.getElementById('bar2'));
        let data200 = [];
        let dataAll = [];
        if (this.viewnums200.length > 2) {
          const str200 = this.viewnums200.join('');
          const str200No1 = str200.substring(1);
          const strAll = this.nums.join('');
          const strAllNo1 = strAll.substring(1);
          const arr200 = this.strToArrByLen(str200, 2);
          const arr201 = this.strToArrByLen(str200No1, 2);
          const arrAll = this.strToArrByLen(strAll, 2);
          const arrrAll1 = this.strToArrByLen(strAllNo1, 2);
          data200 = this.toData(this.num2, arr200, arr201);
          dataAll = this.toData(this.num2, arrAll, arrrAll1);
        }
        // 绘制图表
        myChart.setOption({
            title: { text: '近2轮数: ' + this.num2 },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['近200轮内', '历史全部']
            },
            toolbox: {
              show: true,
              feature: {
                magicType: {show: true, type: ['line', 'bar']},
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
              }
            ],
            yAxis: {
              type: 'value',
              minorTick: {
                lineStyle: { color: 'blue',  opacity: 1}
              }
            },
            series: [
              {
                  name: '近200轮内',
                  type: 'bar',
                  data: data200,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name: '历史全部',
                  type: 'bar',
                  data: dataAll,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              }
            ]
        });
    },
    drawBar3() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts(document.getElementById('bar3'));
        let data200 = [];
        let dataAll = [];
        if (this.viewnums200.length > 2) {
          const str200 = this.viewnums200.join('');
          const str200No1 = str200.substring(1);
          const str200No2 = str200.substring(2);
          const strAll = this.nums.join('');
          const strAllNo1 = strAll.substring(1);
          const strAllNo2 = strAll.substring(2);
          const arr200 = this.strToArrByLen(str200, 3);
          const arr201 = this.strToArrByLen(str200No1, 3);
          const arr202 = this.strToArrByLen(str200No2, 3);
          const arrAll = this.strToArrByLen(strAll, 3);
          const arrrAll1 = this.strToArrByLen(strAllNo1, 3);
          const arrrAll2 = this.strToArrByLen(strAllNo2, 3);
          data200 = this.toData(this.num3, arr200, arr201, arr202);
          dataAll = this.toData(this.num3, arrAll, arrrAll1, arrrAll2);
        }
        // 绘制图表
        myChart.setOption({
            title: { text: '近3轮数: ' + this.num3 },
           tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['近200轮内', '历史全部']
            },
            toolbox: {
              show: true,
              feature: {
                magicType: {show: true, type: ['line', 'bar']},
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
              }
            ],
            yAxis: {
              type: 'value',
              minorTick: {
                lineStyle: { color: 'blue',  opacity: 1}
              }
            },
            series: [
              {
                  name: '近200轮内',
                  type: 'bar',
                  data: data200,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name: '历史全部',
                  type: 'bar',
                  data: dataAll,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              }
            ]
        });
    },
    strToArrByLen(str,len=2) { //str为待处理的文字,len为分割的字数个数
      const strArr=[]
      let startIndex=0
      let endIndex=len
      while(endIndex<str.length){
          strArr.push(str.slice(startIndex,endIndex))
          startIndex = endIndex,
          endIndex+=len
          if(endIndex>=str.length) strArr.push(str.slice(startIndex,str.length))
      }
      return strArr
    },
    toData(num, arr = [], arr1 = [], arr2 = []) {// 错位处理 保证相邻两个及以上都有机会 两位及以上整体时有效
      const data = Array(10).fill(0);
      arr.forEach((ele, index) => {
        if (ele == num) {
          if (arr[index + 1] != undefined) {
            const td = (arr[index + 1] + '')[0];
            data[+td]++;
          }
        }
      });
      arr1.forEach((ele, index) => {
        if (ele == num) {
          if (arr1[index + 1] != undefined) {
            const td = (arr1[index + 1] + '')[0];
            data[+td]++;
          }
        }
      });
      arr2.forEach((ele, index) => {
        if (ele == num) {
          if (arr2[index + 1] != undefined) {
            const td = (arr2[index + 1] + '')[0];
            data[+td]++;
          }
        }
      });
      return data;
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ui >>> .el-tabs__content {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.el-tab-pane{
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.block {
    text-align: center;
    border: 1px solid #eff2f6;
    display: inline-block;
    width: 32%;
    box-sizing: border-box;
    vertical-align: top;
    height: 320px;
    margin: 5px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    height: 5%;
    margin: 10px 0;
}
.el-image {
    width: 100%;
    height: 88%;
    position: relative;
    display: inline-block;
    overflow: hidden;
}
.el-image__inner{
    width: 100%;
    height: 100%;
}
.numbertable {
  width: 100%;
  height: 50%;
}
.bars{
  float: left;
  height: 100%;
  width: 33%;
}
</style>
