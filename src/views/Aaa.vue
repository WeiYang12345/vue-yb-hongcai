<template>
  <div>
    <div class="an">222</div>
  </div>
</template>
<script>
import axios  from 'axios'
export default {

  mounted() {
   
    axios({
      method: 'delete',
      url: 'http://172.23.44.19:8881/api/live/follow',
      params: {aid: 37260}, 
       headers: {'Authorization': "Bearer " +'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xNzIuMjMuNDQuMTk6ODg4MVwvc3NvLWF1dGhvcml6ZSIsImlhdCI6MTYxMjM2MjAyMywiZXhwIjoxNjEyMzY1NjIzLCJuYmYiOjE2MTIzNjIwMjMsImp0aSI6IjhCdGVLTGJRcFE2aEZYM0giLCJzdWIiOjM3MTAyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.vRWcZRbRBp4TER5nq7gv-iXmeh5JTHmG0ghA7jvAq6o'},
    }).then(res => {
      console.log(res)
    })
  }
}



</script>
<style lang="scss" scoped>
.an {
  width: 100px;
  height: 100px;
  border: 1px solid;
  margin: 10px;
  &:hover {
    transform: scale(1.2);
  }
}
</style>