function show_modal(){
    document.querySelector('.modal-screen-bg').classList.add('show-bg-modal');
    document.querySelector('.login-form').classList.add('show-login-form');
    }function remove_modal(){
    document.querySelector('.modal-screen-bg').classList.remove('show-bg-modal');
    document.querySelector('.login-form').classList.remove('show-login-form');
    }
    
    
    
    let is_Modal_open = true
    
    function closer(){
        if (is_Modal_open){
            document.querySelector('.modal-screen-bg').classList.add('show-bg-modal');
            document.querySelector('.login-form').classList.add('show-login-form');
        }
        else{
            document.querySelector('.modal-screen-bg').classList.remove('show-bg-modal');
            document.querySelector('.login-form').classList.remove('show-login-form');
        }
        is_Modal_open = !is_Modal_open
    }
    
    window.addEventListener('keydown', function(event){
        if (event.key === "Escape"){
            closer()
        }
    })