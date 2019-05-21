<template>
  <div class="wrapper">
    <div class="container">
      <div class="welcome-content">
        <h1>Project Vitruvius</h1>
        <div>Is a framework agnostic component library<br />brought to you by MoxiWorks.</div>
      </div>
    </div>
    Hello
  </div>
</template>

<style scoped>
  h1 {
    margin-bottom: 10px;
  }
  .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.5)),url(~assets/bg-main.jpg);
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .welcome-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .24), 0 5px 10px 0 rgba(33, 46, 53, .2);
    background-color: rgba(255,255,255,.8);
  }
</style>