<!--
 * @Author: Sule
 * @Date: 2020-04-13 14:12:11
 * @LastEditors: Sule
 * @LastEditTime: 2020-04-13 18:21:03
 * @Description:
 -->
<template>
  <el-container style="height:100%">
    <el-header style>
      <h1 style="text-align: center;margin-top: 20px;">UI作品展示（部分作品，点击图片可大图全部预览）</h1>
      <h5 style="text-align: center;margin-top: 5px;font-weight: normal;">作者：王菲</h5>
    </el-header>
    <el-main style="height:100%"  class="ui">
      <template>
        <el-tabs :tab-position="tabPosition" style="height: 100%;">
          <el-tab-pane v-for="(p,i) in projects" :key="i" :label="p.name">
            <div class="block" v-for="(img,idx) in p.imgs" :key="idx">
              <span class="demonstration">{{img.des}}</span>
              <el-image :src="img.url" fit="contain" :alt="img.des" :preview-src-list="srcList">
                <div slot="placeholder" class="image-slot">
                  加载中
                  <span class="dot">...</span>
                </div>
              </el-image>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tabPosition: 'left',
      projects: [
        {
          name: '币海APP',
          imgs: [
            {
              url: require('../../static/imgs/bh/登陆.png'),
              des: '登陆'
            },
            {
              url: require('../../static/imgs/bh/币圈黑洞-详情.png'),
              des: '币圈黑洞-详情'
            },
            {
              url: require('../../static/imgs/bh/创建社区.png'),
              des: '创建社区'
            },
            {
              url: require('../../static/imgs/bh/发布动态.png'),
              des: '发布动态'
            },
            {
              url: require('../../static/imgs/bh/发布黑洞.png'),
              des: '发布黑洞'
            },
            {
              url: require('../../static/imgs/bh/签到-1.png'),
              des: '签到-1'
            },
            {
              url: require('../../static/imgs/bh/首页-1.png'),
              des: '首页-1'
            },
            {
              url: require('../../static/imgs/bh/我的-设置.png'),
              des: '我的-设置'
            },
            {
              url: require('../../static/imgs/bh/我的-使用帮助.png'),
              des: '我的-使用帮助'
            },
            {
              url: require('../../static/imgs/bh/我的-我的社区-详情.png'),
              des: '我的-我的社区-详情'
            },
            {
              url: require('../../static/imgs/bh/我的-我的社区-状态.png'),
              des: '我的-我的社区-状态'
            },
            {
              url: require('../../static/imgs/bh/我的-邀请好友.png'),
              des: '我的-邀请好友'
            },
            {
              url: require('../../static/imgs/bh/我的-主页.png'),
              des: '我的-主页'
            },
            {
              url: require('../../static/imgs/bh/消息.png'),
              des: '消息'
            },
            {
              url: require('../../static/imgs/bh/最新项目.png'),
              des: '最新项目'
            }
          ]
        },
        {
          name: '停划算APP',
          imgs: [
            {
              url: require('../../static/imgs/ths/车场会员.png'),
              des: '车场会员'
            },
            {
              url: require('../../static/imgs/ths/电子发票填写.png'),
              des: '电子发票填写'
            },
            {
              url: require('../../static/imgs/ths/电子发票.png'),
              des: '电子发票'
            },
            {
              url: require('../../static/imgs/ths/订单-私人车位-降锁停车-弹窗.jpg'),
              des: '订单-私人车位-降锁停车-弹窗'
            },
            {
              url: require('../../static/imgs/ths/更多.png'),
              des: '更多'
            },
            {
              url: require('../../static/imgs/ths/客服中心-优化.png'),
              des: '客服中心-优化'
            },
            {
              url: require('../../static/imgs/ths/平台会员-修改券样式.png'),
              des: '平台会员-修改券样式'
            },
            {
              url: require('../../static/imgs/ths/平台会员-组合券修改券样式.png'),
              des: '平台会员-组合券修改券样式'
            },
            {
              url: require('../../static/imgs/ths/商家首页.png'),
              des: '商家首页'
            },
            {
              url: require('../../static/imgs/ths/驶离页面优化.png'),
              des: '驶离页面优化'
            },
            {
              url: require('../../static/imgs/ths/首页广告更新.png'),
              des: '首页广告更新'
            },
            {
              url: require('../../static/imgs/ths/首页待支付.png'),
              des: '首页待支付'
            },
            {
              url: require('../../static/imgs/ths/首页弹屏.png'),
              des: '首页弹屏'
            },
            {
              url: require('../../static/imgs/ths/首页进行中-车位号.png'),
              des: '首页进行中-车位号'
            },
            {
              url: require('../../static/imgs/ths/首页拷贝.png'),
              des: '首页拷贝'
            },
            {
              url: require('../../static/imgs/ths/首页.jpg'),
              des: '首页'
            },
            {
              url: require('../../static/imgs/ths/首页-banner更新-1.png'),
              des: '首页-banner更新-1'
            },
            {
              url: require('../../static/imgs/ths/数据中心.png'),
              des: '数据中心'
            },
            {
              url: require('../../static/imgs/ths/双车场会员.png'),
              des: '双车场会员'
            },
            {
              url: require('../../static/imgs/ths/小程序-道闸车场-订单详情-支付凭证.png'),
              des: '小程序-道闸车场-订单详情-支付凭证'
            },
            {
              url: require('../../static/imgs/ths/押金已交.png'),
              des: '押金已交'
            },
            {
              url: require('../../static/imgs/ths/长租详情-秒杀.png'),
              des: '长租详情-秒杀'
            },
            {
              url: require('../../static/imgs/ths/押金已交.png'),
              des: '押金已交'
            },
            {
              url: require('../../static/imgs/ths/支付凭证-已过期.png'),
              des: '支付凭证-已过期'
            },
            {
              url: require('../../static/imgs/ths/支付凭证-已验证.png'),
              des: '支付凭证-已验证'
            },
            {
              url: require('../../static/imgs/ths/支付凭证-无牌车.png'),
              des: '支付凭证-无牌车'
            },
            {
              url: require('../../static/imgs/ths/组合券详情2.png'),
              des: '组合券详情2'
            }
          ]
        },
        {
          name: '毓蒙中学pc端',
          imgs: [
            {
              url: require('../../static/imgs/ympc/班级页-班级考勤-课程考勤.png'),
              des: '班级页-班级考勤-课程考勤'
            },
            {
              url: require('../../static/imgs/ympc/班级页-班级考勤-校园考勤.png'),
              des: '班级页-班级考勤-校园考勤'
            },
            {
              url: require('../../static/imgs/ympc/班级页-德育-拷贝.png'),
              des: '班级页-德育-拷贝'
            },
            {
              url: require('../../static/imgs/ympc/班级页-德育.png'),
              des: '班级页-德育'
            },
            {
              url: require('../../static/imgs/ympc/班级页-登录.png'),
              des: '班级页-登录'
            },
            {
              url: require('../../static/imgs/ympc/班级页-课表.png'),
              des: '班级页-课表'
            },
            {
              url: require('../../static/imgs/ympc/班级页-食谱.png'),
              des: '班级页-食谱'
            },
            {
              url: require('../../static/imgs/ympc/课程考勤.png'),
              des: '课程考勤'
            },
            {
              url: require('../../static/imgs/ympc/列表-按钮选中.png'),
              des: '列表-按钮选中'
            },
            {
              url: require('../../static/imgs/ympc/列表—未选中.png'),
              des: '列表—未选中'
            },
            {
              url: require('../../static/imgs/ympc/设置页-绑定服务器地址-成功.png'),
              des: '设置页-绑定服务器地址-成功'
            },
            {
              url: require('../../static/imgs/ympc/设置页-绑定服务器地址.png'),
              des: '设置页-绑定服务器地址'
            },
            {
              url: require('../../static/imgs/ympc/设置页-弹窗.png'),
              des: '设置页-弹窗'
            },
            {
              url: require('../../static/imgs/ympc/首页.png'),
              des: '首页'
            },
            {
              url: require('../../static/imgs/ympc/学校.png'),
              des: '学校'
            },
            {
              url: require('../../static/imgs/ympc/学校——详情.png'),
              des: '学校——详情'
            }
          ]
        },
        {
          name: '毓蒙中学后台端',
          imgs: [
            {
              url: require('../../static/imgs/ymht/首页.png'),
              des: '首页'
            },
            {
              url: require('../../static/imgs/ymht/查看课程-删除.png'),
              des: '查看课程-删除'
            },
            {
              url: require('../../static/imgs/ymht/德育评分.png'),
              des: '德育评分'
            },
            {
              url: require('../../static/imgs/ymht/德育维度管理.png'),
              des: '德育维度管理'
            },
            {
              url: require('../../static/imgs/ymht/德育维度管理-查看.png'),
              des: '德育维度管理-查看'
            },
            {
              url: require('../../static/imgs/ymht/德育维度管理-弹窗-1.png'),
              des: '德育维度管理-弹窗-1'
            },
            {
              url: require('../../static/imgs/ymht/滚动通知.png'),
              des: '滚动通知'
            },
            {
              url: require('../../static/imgs/ymht/教师档案-审核中.png'),
              des: '教师档案-审核中'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-班级课表-拷贝6.png'),
              des: '排课管理-班级课表-拷贝6'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-班级课表-拷贝7.png'),
              des: '排课管理-班级课表-拷贝7'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-班级课表-拷贝8.png'),
              des: '排课管理-班级课表-拷贝8'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-班级课表-编辑.png'),
              des: '排课管理-班级课表-编辑'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-班级课表新增.png'),
              des: '排课管理-班级课表新增'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-自选课程管理-拷贝2.png'),
              des: '排课管理-自选课程管理-拷贝2'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-自选课程管理-拷贝.png'),
              des: '排课管理-自选课程管理-拷贝'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-自选课程管理.png'),
              des: '排课管理-自选课程管理'
            },
            {
              url: require('../../static/imgs/ymht/排课管理-自选课程管理-查看课程.png'),
              des: '排课管理-自选课程管理-查看课程'
            },
            {
              url: require('../../static/imgs/ymht/添加课程.png'),
              des: '添加课程'
            },
            {
              url: require('../../static/imgs/ymht/添加-课程.png'),
              des: '添加-课程'
            },
            {
              url: require('../../static/imgs/ymht/新增班级发布.png'),
              des: '新增班级发布'
            },
            {
              url: require('../../static/imgs/ymht/新增通知动态.png'),
              des: '新增通知动态'
            },
            {
              url: require('../../static/imgs/ymht/学生档案新增-户籍信息-步骤条展示.png'),
              des: '学生档案新增-户籍信息-步骤条展示'
            },
            {
              url: require('../../static/imgs/ymht/学生档案新增-基础信息.png'),
              des: '学生档案新增-基础信息'
            },
            {
              url: require('../../static/imgs/ymht/学生学籍.jpg'),
              des: '学生学籍'
            },
            {
              url: require('../../static/imgs/ymht/学生档案新增-现居住地信息.png'),
              des: '学生档案新增-现居住地信息'
            }
          ]
        },
        {
          name: '校园车辆管理',
          imgs: [
            {
              url: require('../../static/imgs/cl/首页.jpg'),
              des: '首页'
            },
            {
              url: require('../../static/imgs/cl/车辆管理——黑名单.png'),
              des: '车辆管理——黑名单'
            },
            {
              url: require('../../static/imgs/cl/车辆管理首页大屏.png'),
              des: '车辆管理首页大屏'
            },
            {
              url: require('../../static/imgs/cl/车辆管理——异常.png'),
              des: '车辆管理——异常'
            },
            {
              url: require('../../static/imgs/cl/道闸放行.png'),
              des: '道闸放行'
            },
            {
              url: require('../../static/imgs/cl/道闸放行-提示.png'),
              des: '道闸放行-提示'
            },
            {
              url: require('../../static/imgs/cl/管理中心-车辆信息.png'),
              des: '管理中心-车辆信息'
            },
            {
              url: require('../../static/imgs/cl/管理中心-车辆信息-新增正确.png'),
              des: '管理中心-车辆信息-新增正确'
            },
            {
              url: require('../../static/imgs/cl/管理中心-预留车位管理.png'),
              des: '管理中心-预留车位管理'
            },
            {
              url: require('../../static/imgs/cl/数据中心-数据统计.png'),
              des: '数据中心-数据统计'
            },
            {
              url: require('../../static/imgs/cl/员工查看.png'),
              des: '员工查看'
            }
          ]
        },
        {
          name: '平面作品',
          imgs: [
            {
              url: require('../../static/imgs/pm/二折页-正面.png'),
              des: '二折页-正面'
            },
            {
              url: require('../../static/imgs/pm/二折页-内容.png'),
              des: '二折页-内容'
            },
            {
              url: require('../../static/imgs/pm/停划算二折页宣传-内页.jpg'),
              des: '停划算二折页宣传-内页'
            },
            {
              url: require('../../static/imgs/pm/三折页-正.jpg'),
              des: '三折页-正'
            },
            {
              url: require('../../static/imgs/pm/三折页-反.jpg'),
              des: '三折页-反'
            },
            {
              url: require('../../static/imgs/pm/锦香苑饭店欢迎您.png'),
              des: '锦香苑饭店欢迎您'
            },
            {
              url: require('../../static/imgs/pm/兰州优惠券-9.9张贴海报60cm-90cm.jpg'),
              des: '兰州优惠券-9.9张贴海报60cm-90cm'
            },
            {
              url: require('../../static/imgs/pm/击剑.png'),
              des: '击剑'
            }
          ]
        }
      ],
      srcList: [
      ]
    }
  },
  mounted () {
    const arr = []
    this.projects.forEach(p => {
      p.imgs.forEach(i => {
        if (i.url) { arr.push(i.url) }
      })
    })
    this.srcList = arr
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
</style>
