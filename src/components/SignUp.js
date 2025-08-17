import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Buat Akun</h1>
        <h3>Username</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="text" />
        <button>Signup</button>
        <p>Sudah punya akun?</p>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/")}>Kembali</button>
    </div>
  )
}