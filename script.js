
        const slots = ['first', 'second', 'third'];
        let users = [
            { id: '1', name: 'moe', slot: 'first', selected: false},
            { id: '2', name: 'larry', slot: 'second', selected: false},
            { id: '3', name: 'curly', slot: 'second', selected: false},
            { id: '4', name: 'lucy', slot: 'third', selected: false},
        ];
        //helper function determines which slot each person belongs, returns an array 
        
        const list1 = document.querySelector('#firstSlots');
        const list2 = document.querySelector('#secondSlots');
        const list3 = document.querySelector('#thirdSlots');
        
        function popUsers (users){
        const usersToPopulate= users.reduce( (acc, current) => {
            if (current.slot === 'first'){
                if(current.selected) {acc[0].push(`<li class='active' id='${current.id}'>${current.name}</li>`)} else {
                acc[0].push(`<li id='${current.id}'>${current.name}</li>`)}
            }
            if (current.slot === 'second'){
                if(current.selected) {acc[1].push(`<li class='active' id='${current.id}'>${current.name}</li>`)} else {
                acc[1].push(`<li id='${current.id}'>${current.name}</li>`)}
            }
            if (current.slot === 'third'){
                if(current.selected) {acc[2].push(`<li class='active'  id='${current.id}'>${current.name}</li>`)} else {
                acc[2].push(`<li id='${current.id}'>${current.name}</li>`)}
            }  
           return acc
        }, [[],[],[]])
        
        // displays each person in the correct slot
        firstSlots.innerHTML=usersToPopulate[0].join("");
        secondSlots.innerHTML=usersToPopulate[1].join("");
        thirdSlots.innerHTML=usersToPopulate[2].join("");
    };
        // function invocation
        popUsers(users);
        const firstSlotsList = document.querySelector('#firstSlots');       
        const secondSlotsList = document.querySelector('#secondSlots');
        const thirdSlotsList = document.querySelector('#thirdSlots');

        firstSlotsList.addEventListener('click', (ev)=> {
            const listItem = ev.target;
            const idx = [...firstSlotsList.children].indexOf(listItem);
            let idRetrieved = listItem.getAttribute('id');
            if(listItem.value === 0){
            listItem.setAttribute("style", "background-color: tomato;");
            listItem.setAttribute("value", "1");// make it selected
            //Update users object specific user selected
            users =users.map(user => {            
                if(user.id === idRetrieved) {
                    user.selected = true;
                }
                return user;
            })
            } else {
            listItem.setAttribute("style", "background-color: whitesmoke;");
            listItem.setAttribute("value", "0");
            users = users.map(user=>{
                if(user.id === idRetrieved) {
                     user.selected = false;
                }
                return user;
                });
            }
    });
    secondSlotsList.addEventListener('click', (ev)=> {
            const listItem = ev.target;
            const idx = [...secondSlotsList.children].indexOf(listItem);
            let idRetrieved = listItem.getAttribute('id');
            if(listItem.value === 0){
            listItem.setAttribute("style", "background-color: tomato;");
            listItem.setAttribute("value", "1");
                        //Update users object specific user selected
            users =users.map(user => {            
                if(user.id === idRetrieved) {
                    user.selected = true;
                }
                return user;
            })
            } else {
            listItem.setAttribute("style", "background-color: whitesmoke;");
            listItem.setAttribute("value", "0");
            users = users.map(user=>{
                if(user.id === idRetrieved) {
                     user.selected = false;
                }
                return user;
                });
            }
    });
        thirdSlotsList.addEventListener('click', (ev)=> {
            const listItem = ev.target;
            const idx = [...thirdSlotsList.children].indexOf(listItem);
            let idRetrieved = listItem.getAttribute('id');
            if(listItem.value === 0){
            listItem.setAttribute("style", "background-color: tomato;");
            listItem.setAttribute("value", "1");
                        //Update users object specific user selected
                        users =users.map(user => {            
                if(user.id === idRetrieved) {
                    user.selected = true;
                }
                return user;
            })
            } else {
            listItem.setAttribute("style", "background-color: whitesmoke;");
            listItem.setAttribute("value", "0");
            users = users.map(user=>{
                if(user.id === idRetrieved) {
                     user.selected = false;
                }
                return user;
                });
            }
    });

    const mvRight1Btn = document.querySelector('#moveRight1');
    const mvLeft2Btn = document.querySelector('#moveLeft2');
    const mvRight2Btn = document.querySelector('#moveRight2');
    const mvLeft3Btn = document.querySelector('#moveLeft3');
      

    mvRight1Btn.addEventListener('click', (ev) => {
        users = users.map (user => {
            if (user.slot === 'first' && user.selected=== true)
            {user.slot = 'second'}

            return user;
        })
        popUsers(users);
    })

    mvLeft2Btn.addEventListener('click', (ev) => {
    users = users.map (user => {
        if (user.slot === 'second' && user.selected=== true)
        {user.slot = 'first'}

        return user;
    })
    popUsers(users);
    })

    mvRight2Btn.addEventListener('click', (ev) => {
    users = users.map (user => {
        if (user.slot === 'second' && user.selected=== true)
        {user.slot = 'third'}

        return user;
    })
    popUsers(users);
    })

    mvLeft3Btn.addEventListener('click', (ev) => {
    users = users.map (user => {
        if (user.slot === 'third' && user.selected=== true)
        {user.slot = 'second'}

        return user;
    })
    popUsers(users);
    })