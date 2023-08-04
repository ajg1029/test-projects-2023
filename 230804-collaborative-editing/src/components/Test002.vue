<template>
  <div>
    <h1>Test002</h1>
    <button @click="createNewTextarea">test</button>
    <br />
    <div id="section" style="display: flex; flex-direction: column; width: 80%;">

    </div>
  </div>
</template>

<script>
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabetArray = alphabet.split('')

export default {
  name: 'Test002',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

    window.addEventListener('resize', () => {
      const textareaList = document.getElementsByTagName('textarea')
      // console.log(textareaList)
      Array.prototype.forEach.call(textareaList, (textarea) => {
        this.resizeTextarea(textarea.id)
      })
    })

  },
  watch: {

  },
  methods: {
    createNewTextarea() {
      let newTextarea = document.createElement('textarea')
      const randomAlphabet1 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
      const randomAlphabet2 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
      const randomAlphabet3 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
      const randomAlphabet4 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
      const currDatetime = new Date().getTime()
      const newTextareaId = currDatetime.toString() + randomAlphabet1 + randomAlphabet2 + randomAlphabet3 + randomAlphabet4
      newTextarea.setAttribute('id', newTextareaId)

      newTextarea.style = 'box-sizing: border-box; width: 100%; padding: 7px; border: 3px solid lightblue; overflow: hidden; height: 44px; line-height: 24px; font-size: 24px'

      newTextarea.addEventListener('keydown', (event) => {
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          console.log('shift keydown')
        }
      })
      
      newTextarea.addEventListener('keyup', (event) => {
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          console.log('shift keyup')
        }
      })


      newTextarea.addEventListener('keyup', (event) => {
        this.resizeTextarea(newTextareaId)
        if (event.code === 'Enter') {
          this.createNewTextarea()
        }
      })

      let section = document.getElementById('section')
      section.appendChild(newTextarea)
      newTextarea.focus()
    },
    resizeTextarea(textareaId) {
      let textarea = document.getElementById(textareaId)

      // textarea.value = textarea.value.split('\n')[0]

      // console.log('scrollHeight', textarea.scrollHeight)
      // console.log('height', textarea.style.height)
      textarea.style.height = 0 + 'px'
      textarea.style.height = textarea.scrollHeight - 7 * 2 + 20 + 'px'
      textarea.style.width = 100 + '%'
    }
  }
}

</script>

<style scoped>

</style>