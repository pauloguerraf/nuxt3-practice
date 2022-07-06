<template>
  <div>
    <ContentDoc />
    <div class="i-carbon-sun" />
    <div class="scroll-tester"></div>
    <div class="i-carbon-moon" />
  </div>
</template>

<style>
.i-carbon-sun {
  color: black;
  margin-inline: auto;
}
.i-carbon-moon {
  color: black;
  margin-inline: auto;
}
.scroll-tester {
  min-block-size: 400vh;
  inline-size: 10px;
  border: 1px solid darkblue;
  border-radius: 5px;
  margin: 20px auto;
  background-image: linear-gradient(to bottom, lightgray, black);
}
</style>
