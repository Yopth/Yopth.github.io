import Platform from './platform';

const CSS = {
  ['CSS的Cascade']:
    'https://mp.weixin.qq.com/s?__biz=Mzg2MDYyNTg2NQ==&mid=2247485132&idx=1&sn=f19036b01c636bcafac9404e6703f1c3&chksm=ce22c86af955417c820bb1bb474e01156d47d8aeb60f08e25cef02706493a3775779ecc2ca4a',
  ['必知必会margin-inline, margin-block, padding-inline, padding-block']:
    'https://mp.weixin.qq.com/s?__biz=Mzg2MDYyNTg2NQ==&mid=2247485146&idx=1&sn=a1a4a4a0fc61f5b457543d77a4951f2f&chksm=ce22c87cf955416adf73fb62779a66bea36a1eb4a657a363846676d5fd8329d53ef60e34ca19&token=12353019&lang=zh_CN#rd',
  ['习以为常但又不太了解的包含块——如何决定元素的尺寸和位置']:
    'https://mp.weixin.qq.com/s?__biz=Mzg2MDYyNTg2NQ==&mid=2247485449&idx=1&sn=d3584c6f7dea353cbfaac0a95d78fcad&chksm=ce22c6aff9554fb93b56737d56a54635d98bce5296747d5cbd1b2c7f8dd0ca49be05f39aa422&token=978795651&lang=zh_CN#rd',
};

const CSSInDepth = {
  ['CSS In Depth: PART1 REVIEWING THE FUNDAMENTALS']:
    'https://mp.weixin.qq.com/s?__biz=Mzg2MDYyNTg2NQ==&mid=2247485216&idx=1&sn=e9131717a962d77503f7aae835197cca&chksm=ce22c986f9554090ad659f97300bc3cd82b4b337a054e7b7c4a04364e8101a3799283b0c8f09&token=12353019&lang=zh_CN#rd',
  [Platform.CSDN]: {
    ['CSS In Depth: PART1 REVIEWING THE FUNDAMENTALS']:
      'https://blog.csdn.net/YopenLang/article/details/125299678?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22125299678%22%2C%22source%22%3A%22YopenLang%22%7D&ctrtid=CQcQU',
    ['随着滚轮滑动，元素淡入']:
      'https://blog.csdn.net/YopenLang/article/details/125270249',
  },
  [Platform.JueJin]: {
    ['CSS In Depth: PART1 REVIEWING THE FUNDAMENTALS']:
      'https://juejin.cn/post/7109386323173048327/',
  },
};

const TCP = {
  chapter12: 'https://mp.weixin.qq.com/s/RVytfuqA-GIQcwORDYTliw',
};
const Shell = {
  ['MacOS如何使用date命令输出指定时区']:
    'https://mp.weixin.qq.com/s?__biz=Mzg2MDYyNTg2NQ==&mid=2247485129&idx=1&sn=6639cf7dcbfd95ed3f01ec840bf26b5a&chksm=ce22c86ff9554179c6b24392e1195cd2eec19e190be5778c4d06e6a2ab4dfa4a407c7579181c',
  [Platform.CSDN]: {
    ['Shell/sh 中如何定义、使用数组']:
      'https://blog.csdn.net/YopenLang/article/details/125344345',
    ['Shell/sh 中，变量是大小写敏感的吗？']:
      'https://blog.csdn.net/YopenLang/article/details/125344027',
    ['Shell/Sh 中两个方括号 [ ] 的作用']:
      'https://blog.csdn.net/YopenLang/article/details/125339341',
    ['Set 命令']: 'https://blog.csdn.net/YopenLang/article/details/125338871',
    ['如何在 man 页面中进行搜索？']:
      'https://blog.csdn.net/YopenLang/article/details/125337829',
    ['解决 SSH connect to host github com port 22 Connection timed out 问题']:
      'https://blog.csdn.net/YopenLang/article/details/125311235',
    ['解决 /bin/sh: node: command not found 的问题']:
      'https://blog.csdn.net/YopenLang/article/details/125310318',
    ['如何查看内建命令']:
      'https://blog.csdn.net/YopenLang/article/details/125306880',
    ['make 命令干什么用？']:
      'https://blog.csdn.net/YopenLang/article/details/125306218',
    ['']: '',
  },
};

const ReactVue = {
  [Platform.CSDN]: {
    ['在 React 中改变 SVG 颜色']:
      'https://blog.csdn.net/YopenLang/article/details/125317423',
  },
};

const TypeScript = {
  [Platform.CSDN]: {
    ['TS: 获取数组的元素类型']:
      'https://blog.csdn.net/YopenLang/article/details/125280771',
  },
};

export { CSS as CSSLink };
export { CSSInDepth as CSSInDepthLink };
export { TCP as TCPLink };
export { Shell as ShellLink };
export { ReactVue as ReactVueLink };
export { TypeScript as TypeScriptLink };
