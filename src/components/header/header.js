export default {
  name: 'HelloWorld',
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
