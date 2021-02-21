async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

setInterval(check_Mouse, 1000); //check every second
let count = 0;
function myFunction(e) {
  count = 0; //onmousemove
}
// check time and increment if it hasn't been 5 minutes
function check_Mouse() {
  // logout after 5 mins of inactivity
  if (count === 5) {
    count = 0;
    logout();
  } else {
    count += 1;
  }
}

document.querySelector("#logout").addEventListener("click", logout);
