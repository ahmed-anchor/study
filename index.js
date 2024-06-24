


// Declaring The Characters Content
const jake = {
     name: "jake",
     img: "jake",
}

const fakeJake = {
     name: "jake",
     img: "fake-jake",
}

const bemo = {
     name: "bemo",
     img: "bemo",
}

const fakeBemo = {
     name: "bemo",
     img: "fake-bemo",
}

const flambo = {
     name: "flambo",
     img: "flambo",
}

const fakeFlambo = {
     name: "flambo",
     img: "fake-flambo",
}

const firePrincess = {
     name: "fire princess",
     img: "fire-princess",
}

const fakeFirePrincess = {
     name: "fire princess",
     img: "fake-fire-princess",
}

const marceline = {
     name: "marceline",
     img: "marceline",
}

const fakeMarceline = {
     name: "marceline",
     img: "fake-marceline",
}

const iceKing = {
     name: "ice king",
     img: "ice-king",
}

const fakeIceKing = {
     name: "ice king",
     img: "fake-ice-king",
}

const sinnamonBun = {
     name: "sinnamon bun",
     img: "sinnamon-bun",
}

const fakeSinnamonBun = {
     name: "sinnamon bun",
     img: "fake-sinnamon-bun",
}
const princessPubbleGum = {
     name: "princess pubblegum",
     img: "princess-pubblegum",
}

const fakePrincessPubbleGum = {
     name: "princess pubblegum",
     img: "fake-princess-pubblegum",
}

const turtlePrincess = {
     name: "turtle princess",
     img: "turtle-princess",
}

const fakeTurtlePrincess = {
     name: "turtle princess",
     img: "fake-turtle-princess",
}

const upstatePrincess = {
     name: "upstate princess",
     img: "upstate-princess",
}

const fakeUpstatePrincess = {
     name: "upstate princess",
     img: "fake-upstate-princess",
}

const breakFastPrincess = {
     name: "breakfast princess",
     img: "breakfast-princess",
}

const fakeBreakFastPrinces = {
     name: "breakfast princess",
     img: "fake-breakfast-princess",
}

const toastPrincess = {
     name: "toast princess",
     img: "toast-princess",
}

const fakeToastPrincess = {
     name: "toast princess",
     img: "fake-toast-princess"
}

var realCharacters = [ jake , bemo , flambo , firePrincess , marceline , iceKing , sinnamonBun 
     , princessPubbleGum , turtlePrincess , upstatePrincess , breakFastPrincess , toastPrincess
]

var shuffledRealCharacters = shuffle(realCharacters)

var entryRequest = [ shuffledRealCharacters[0].name , shuffledRealCharacters[1].name , shuffledRealCharacters[2].name
     , shuffledRealCharacters[3].name
]


var shuffledAllCharacters = shuffle([ fakeJake , fakeBemo , fakeFlambo , fakeFirePrincess , fakeMarceline 
     , fakeIceKing , fakeSinnamonBun , fakePrincessPubbleGum , fakeTurtlePrincess , fakeUpstatePrincess 
     , fakeBreakFastPrinces , fakeToastPrincess , shuffledRealCharacters[0] , shuffledRealCharacters[1] 
     , shuffledRealCharacters[2] , shuffledRealCharacters[3] , shuffledRealCharacters[4] 
     , shuffledRealCharacters[5]
])

var hotelCharacters = [ shuffledRealCharacters[6] , shuffledRealCharacters[7] , shuffledRealCharacters[8]
     , shuffledRealCharacters[9] , shuffledRealCharacters[10] , shuffledRealCharacters[11]
]

console.log(entryRequest)
console.log(hotelCharacters)
console.log(shuffledAllCharacters)


















































window.addEventListener('DOMContentLoaded' , () => {
     document.querySelector('.list-container').textContent = entryRequest.join(" - ")
     var count = 0
     var permission = false
     document.querySelector('.wall').style.top = "-33%"
     setTimeout(() => {
     document.querySelector(`.${shuffledAllCharacters[count].img}`).style.left = "30%"
     count++
     permission = true
     }, 2000)
     // entry button
     document.querySelector('.entry-btn').addEventListener('click', function (click) {
          if (count >= 0 && shuffledAllCharacters.length > count) {
               document.querySelector(`.${shuffledAllCharacters[count].img}`).style.left = "80%"
               permission = true
               console.log(shuffledAllCharacters.length)
               if (permission === true) {
                    document.querySelector(`.${shuffledAllCharacters[count].img}`).style.left = "30%"
                    count++
                    permission = false 
               } else {
                    click.preventDefault()
               }
          }else {
               click.preventDefault()
          }
     })
})


// Closing And Opining Files
document.querySelector('.first').addEventListener('click', () => {
     document.querySelector('.first-floor').style.display = "flex"
})
document.querySelector('.one-exit-profile').addEventListener('click', () => {
     document.querySelector('.first-floor').style.display = "none"
})

document.querySelector('.second').addEventListener('click', () => {
     document.querySelector('.second-floor').style.display = "flex"
})
document.querySelector('.two-exit-profile').addEventListener('click', () => {
     document.querySelector('.second-floor').style.display = "none"
})

document.querySelector('.third').addEventListener('click', () => {
     document.querySelector('.third-floor').style.display = "flex"
})
document.querySelector('.three-exit-profile').addEventListener('click', () => {
     document.querySelector('.third-floor').style.display = "none"
})


// Closing And Opening The List
document.querySelector('.list').addEventListener('click', () => {
     document.querySelector('.the-list').style.display = "flex"
})
document.querySelector('.exit').addEventListener('click', () => {
     document.querySelector('.the-list').style.display = "none"
})


// Closing And Opening The Phone
document.querySelector('.phone').addEventListener('click', () => {
     document.querySelector('.phone-binar').style.display = "flex"
})
document.querySelector('.back').addEventListener('click', () => {
     document.querySelector('.pad').value = ""
     document.querySelector('.phone-binar').style.display = "none"
})

// typing numbers
document.querySelectorAll('.btn').forEach((btn) => {
     btn.addEventListener('click', () => {
          if (document.querySelector('.pad').value.length < 4) {
               document.querySelector('.pad').value += btn.textContent
          }else {
               btn.preventDefault()
               if (document.querySelector('.pad').value === 5546) {
                    hotelCharacters.includes(iceKing) 
               }else if (document.querySelector('.pad').value === 4678) {

               }else if(document.querySelector('.pad').value === 5661) {

               }else if (document.querySelector('.pad').value === 9900) {

               }else if(document.querySelector('.pad').value === 4445) {

               }else if(document.querySelector('.pad').value === 1199) {

               }
          }
     })
})

// Caging
document.querySelector('.emergency').addEventListener('click', () => {
     if(document.querySelector('.wall').style.top !== "10%") {
          document.querySelector('.wall').style.top = "10%"
     } else {
          document.querySelector('.wall').style.top = "-33%"
     }
})


// The Shuffle Code
function shuffle(array) {
     for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
     }
     return array;
}







