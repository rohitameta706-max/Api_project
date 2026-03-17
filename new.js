// let user = document.getElementById("user_id");
// let id = document.getElementById("id");
// let title = document.getElementById("status_here");
let allContent = document.getElementById("All_details");
 
async function This_api() {
   try{ 
    const response = await fetch("https://jsonplaceholder.typicode.com/todos"); 

    if(response.ok){
      console.log("Api accessed");
    }else{
        console.log("API failed");
    }

    const users = await response.json();

     users.slice(0, 1000).forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>User ID: ${user.userId}</h3>
        <p>ID: ${user.id}</p>
        <p>Title: ${user.title}</p>
        <p>Status: ${user.completed}</p>
      `;

      allContent.appendChild(card);
    });

      } catch (err) {
    console.log("Error:", err);
  }
}

This_api();



