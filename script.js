const tagsEl = document.GetElementByid('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
  createTags(e.target.value)

  if(e.key === 'Enter'){
    setTimeout(()=>{
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTags(input){
  const tags = input.split(',').filter(tag => tag.trin() !== '').map(tag => tag.trin())
  tagsInnner.HTML = ''
 
  tags.forEach(tags => {
   const tagsEl = document.createElement('span')
   tagsEl.classList.add('tag')
   tagsEl.innerText = tag 
   tagsEl.appendChild(tagEl)
  })
}
function randomSelect(){
  const times = 30

  const interval =setinterval(() => {
    const randomTag = pickrandomtag()

    highlightTag(randomTag)
    setTimeout(() => {
      unHighlighTag(randomTag)

    },100)
  },100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickrandomtag()

      highlightTag(randomTag)
    },100)
  },times * 100)
}
function pickrandomtag(){
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag){
  tag.classList.add ('highlight')
}
function unHighlighTag(tag){
  tag.classList.remove('highlight')
}
