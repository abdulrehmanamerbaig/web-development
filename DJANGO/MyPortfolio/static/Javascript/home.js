let dynamic_texts = document.querySelector('.dynamic-text')
const titles = ['Computer Scientist ', 'Web Developer ', 'Data Scientist ']

let current_title = []
let isDeleting = false

let i = 0
let j = 0

function animation(){
    dynamic_texts.innerHTML = current_title.join('')
    if (i <= titles.length){
        if (!isDeleting){
            current_title.push(titles[i][j])
            j ++
            if (j == titles[i].length){
                i ++;
                isDeleting = true
            }
            
        }
        
        if (isDeleting){
            current_title.pop()
            j--
            if (j == 0){
                isDeleting = false

            }
        }
    }
    if (i == titles.length){
        i = 0
    }
    if (isDeleting){
        setTimeout(animation, 50)
    }
    else{
        setTimeout(animation, 100)
    }
}

animation()

function nav_highlighter(){
    let current = 0;

    
    for (var i = 0; i < document.links.length; i++){
        if (document.links[i].href === document.URL){
            current = i
        }
    }
    console.log(document.links[current])
    document.links[current].className = 'here'
}
// nav_highlighter()

// Cheat Codes:
// Always use array for your requirements. 
// In that context, I used array `current_title` and used push and pop functions. Then used join to remove commas.