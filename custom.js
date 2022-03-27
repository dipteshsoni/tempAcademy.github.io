console.log('connected')

let bars = document.getElementById('bars')
bars.style.color = 'white'
// bars.style.border = '2px solid black'
// bars.style.padding = '8px'
bars.style.boxShadow = '0px 5px 40px black'

let searchbtn = document.getElementById('searchbtn')
let searchbox = document.getElementById('searchbox')
let searchbox2 = document.getElementById('searchbox2')

searchbtn.style.display = 'none'

searchbox.addEventListener('input', function () {
  let inputVal = searchbox.value
  //  console.log('evntfired', inputVal.toUpperCase)
  inputVal = inputVal.toLowerCase()
  // console.log(inputVal)

  let contentcontainer = document.getElementsByClassName('contentContainer')
  Array.from(contentcontainer).forEach(function (element) {
    let content = element.getElementsByTagName('h6')[0].innerText
    if (content.includes(inputVal)) {
      // console.log('if working')
      element.style.display = 'block'
      // element.style.backgroundColor = 'red'
    }
    else {
      // console.log('else working')
      element.style.display = 'none'

    }
  })
})
searchbox2.addEventListener('input', function () {
  let inputVal1 = searchbox2.value
  //  console.log('evntfired', inputVal1.toUpperCase)
inputVal1 = inputVal1.toLowerCase()
// console.log(inputVal1)
  let contentcontainer = document.getElementsByClassName('contentContainer')
  Array.from(contentcontainer).forEach(function (element) {
    let content = element.getElementsByTagName('h6')[0].innerText
    if (content.includes(inputVal1)) {
      // console.log('if working')
      element.style.display = 'block'
      // element.style.backgroundColor = 'red'
    }
    else {
      // console.log('else working')
      element.style.display = 'none'

    }
  })
})

console.log('hello it  is working')

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}



/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// ----------------------------------------

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


 //  https://docs.google.com/spreadsheets/d/1unwvKkh5xsKDEvtXH_D_oJPcfCn-D4TsC6hSNI0A-mc/copy
