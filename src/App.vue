<script setup>

</script>

<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

input {
  font-size: 1rem;
  background-color: rgba(255,255,255,.3);
  padding: 10px;
  border: 2px solid rgba(255,255,255,.7);
  border-radius: 5px;
}

input:focus {
  background-color: rgba(255,255,255,.2)
}

button {
  font-weight: 600;
  font-size: 1rem;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 6px 0px 0px #301a6b;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
}

button:hover {
    background-color: #b8a8e6;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
