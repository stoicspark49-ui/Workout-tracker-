async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    window.location.href = "index.html";
  }
}

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful!");
  }
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}

async function checkAuth() {
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    window.location.href = "login.html";
  }
}