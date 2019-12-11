<template>
  <div class="hello" style="background: red">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      id: 0,
      msg: '',
      messages: []
    }
  },
  methods: {
    onSubmit () {
      const { msg, messages } = this
      const message = {
        id: ++this.id,
        dateEtHeure: new Date(),
        msg,
        expediteur: _.upperFirst('Fln Slr')
      }
      messages.push(message)
      this.msg = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
