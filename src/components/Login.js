import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Homepage() {
    const navigate = useNavigate()
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
  return (
    <div>
        <h1>Buat Akun</h1>
        <h3>Username</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="text" />
        <button>Login</button>
        <p>Belum punya akun?</p>
        <button onClick={() => navigate("/signup")}>Signup</button>
        <button onClick={() => navigate("/")}>Kembali</button>
    </div>
  )
}