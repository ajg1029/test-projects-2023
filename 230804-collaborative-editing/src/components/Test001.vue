<template>
  <div>
    <h1>Test001</h1>
    <button @click="createNewTextarea">test</button>
    <div id="section" style="display: flex; flex-direction: column; width: 200px;">

    </div>
  </div>
</template>

<script>
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabetArray = alphabet.split('')

export default {
  name: 'Test001',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    // document.getElementById('section').innerHTML = '<input>'
    
    // let section = document.getElementById('section')
    // let inputTag = document.createElement('input')
    // section.appendChild(inputTag)
    
    
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

      // newTextarea.style = 'box-sizing: border-box; width: 200px; padding: 4px; margin: 2px; height: 190px; line-height: 18px;'
      newTextarea.style = 'box-sizing: border-box; width: 200px; padding: 4px; margin: 2px; height: 28px; line-height: 18px; border: 1px solid lightblue; overflow: hidden;'

      newTextarea.addEventListener('keyup', () => {
        // const lineCount = newTextarea.value.split('\n').length
        this.resizeTextarea(newTextareaId)
        // console.log(newTextarea.innerText.split('\n').length)
        // console.log(newTextarea.innerText)

        // console.log('keyup')
        // console.log(newTextarea.scrollHeight)
        // newTextarea.style.height = 'auto'
        // newTextarea.style.height = newTextarea.scrollHeight + 'px'
      })
      // newTextarea.onkeyup = this.resizeTextarea(newTextareaId)
      // newTextarea.onkeydown = this.resizeTextarea(newTextareaId)

      
      

      let section = document.getElementById('section')
      newTextarea.setAttribute('id', newTextareaId)
      // newTextarea.setAttribute('class', 'jjajan')
      section.appendChild(newTextarea)
      // console.log(newTextareaId.scrollHeight)
    },
    resizeTextarea(textareaId) {

      // console.log(textareaId)
      let textarea = document.getElementById(textareaId)
      let lineCount = textarea.value.split('\n').length
      textarea.style.height = `${lineCount * 18 + 10}px`
      // console.log(textarea.value)
      // console.log(textarea.innerText.split('\n').length)
      // console.log(textarea)
    //   // 높이 1 + 4 + 4 + 1 + 18 * n
    //   console.log(textarea)
    //   // textarea.style.height = 'auto'
    //   // textarea.style.height = textarea.scrollHeight + 'px'
    // console.log('resizeTextarea')
    }
  }
}

</script>

<style scoped>

/* textarea::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: #fff;
} */



</style>