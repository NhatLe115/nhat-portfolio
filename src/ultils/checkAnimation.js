const listFadeIn = ['title', 'main-paragragh']
const listSlideLeft = ['list-skill']
const listBounceIn = ['cycler-exp-1', 'cycler-exp-2', 'cycler-exp-3']
const listBounceInLeft = [
  'exp-left-1',
  'exp-left-2',
  'exp-left-3',
  'left-img-banner',
]
const listBounceInRight = [
  'exp-right-1',
  'exp-right-2',
  'exp-right-3',
  'right-img-banner',
]
export default function checkAnimation(listRef) {
  for (let ref of Object.keys(listRef)) {
    let animationElement = listRef[ref]
    const elementPosition = animationElement.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    if (elementPosition < windowHeight) {
      animationElement.classList.add('animate__animated')
      if (listFadeIn.includes(ref)) {
        animationElement.classList.add('animate__fadeInDown')
      }
      if (listSlideLeft.includes(ref)) {
        animationElement.classList.add('animate__slideInLeft')
      }
      if (listBounceIn.includes(ref)) {
        animationElement.classList.add('animate__bounceIn')
      }
      if (listBounceInLeft.includes(ref)) {
        animationElement.classList.add('animate__bounceInLeft')
      }
      if (listBounceInRight.includes(ref)) {
        animationElement.classList.add('animate__bounceInRight')
      }
    } else {
      animationElement.classList.remove('animate__animated')
      if (listFadeIn.includes(ref)) {
        animationElement.classList.remove('animate__fadeInDown')
      }
      if (listSlideLeft.includes(ref)) {
        animationElement.classList.remove('animate__slideInLeft')
      }
      if (listBounceIn.includes(ref)) {
        animationElement.classList.remove('animate__bounceIn')
      }
      if (listBounceInLeft.includes(ref)) {
        animationElement.classList.remove('animate__bounceInLeft')
      }
      if (listBounceInRight.includes(ref)) {
        animationElement.classList.remove('animate__bounceInRight')
      }
    }
  }
}
