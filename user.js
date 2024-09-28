async function apicall() {
    let url = `https://randomuser.me/api/?results=3`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            resultDisplay.style.display = "none";
            alert("Invalid Location , Please Enter a valid Location")
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const results = (json.results);


        results.forEach((user, index) => {

            let name = `${user.name.first} ${user.name.last}`;
            let img_url = `${user.picture.large}`
            let mail = `${user.email}`
            let parent = document.querySelector('.testi_parent');
            let div = document.createElement('div');
            div.innerHTML = `<div
                class="bg-white/20 h-[350px] w-[350px] rounded-3xl flex flex-col md:justify-evenly justify-center items-center testi_child user${index}">
                <img src=${img_url} alt="" m class="h-[130px] w-[130px] rounded-full testi_dp">
                <h1 class="text-[28px] testi_name"> ${name} </h1>
               

                <a href="mailto: ${mail}"  class="text-center text-secondary testi_mail text-wrap text-lg"> ${mail} </a>
                </div>`;
            parent.appendChild(div);
            

        });


        sr.reveal('.user1', { origin: 'bottom', distance: '400px', delay: 400 })
        sr.reveal('.user2', { origin: 'right', distance: '400px', delay: 400 })
        sr.reveal('.user0', { origin: 'left', distance: '400px', delay: 400 })

    }
    catch (error) {
        console.log(error);
    }
}

apicall()



