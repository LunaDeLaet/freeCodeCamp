let myLeads = []

let oldLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// let myLeads = `["www.youtube.com"]`
// // turn myLeads into array
// myLeads = JSON.parse(myLeads)
// // add new value to array
// myLeads.push("www.google.com")
// // turn myLeads into string again
// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)

// get the leads from localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// keep the leads after refreshing page
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function() {
    //chrome.tabs = API in chrome
    // get current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})



function render(leads) {
    let listItems = ""
    for (let i=0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + " '>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href=' ${leads[i]} '>
                    ${leads[i]}
                </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}

// if double click delete btn: clear localStorage, myLeads, and DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    //add input value to myLeads array
    myLeads.push(inputEl.value)
    //save myLeads array to localstorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //clear input 
    inputEl.value = ""
    render(myLeads)

})







