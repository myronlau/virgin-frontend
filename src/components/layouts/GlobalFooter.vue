<template>
  <div class="global-footer">
    <div class="links">
      <a>Project Virgin</a>
      <a><a-icon type="github" /></a>
      <a>Bridge Shade</a>
    </div>
    <div class="copyright">
      Copyright <a-icon type="copyright" /> 2019 PolGram
    </div>
  </div>
</template>

<style lang="less" scoped>
.global-footer {
  padding: 0 16px;
  margin: 0px 0 24px;
  text-align: center;
  .copyright{
    color: rgba(0,0,0,.45);
    font-size: 14px;
  }
  .links{
    margin-bottom: 8px;
    a:not(:last-child) {
      margin-right: 40px;
    }
    a{
      color: rgba(0,0,0,.45);
      -webkit-transition: all .3s;
      transition: all .3s;
    }
  }
}
</style>