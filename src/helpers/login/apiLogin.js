const loginAuth = process.env.VITE_API_LOGIN

const response = await fetch(loginAuth, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email,
    password
  })
})

const data = await response.json()

// 👇 GUARDAR TOKEN
localStorage.setItem("token", data.token)
