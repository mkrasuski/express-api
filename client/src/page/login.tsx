import { FunctionComponent, useState } from "react"


export const Login: FunctionComponent = () => {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const doLogin = () => {
        console.log({ username,  password })
    }

    return <div>
        <label>login:</label>
        <input type="text" 
            value={username} 
            onInput={e => setUsername(e.currentTarget.value)}
        />
        <br />
        <label>password:</label>
        <input type="password" 
            value={password} 
            onInput={e => setPassword(e.currentTarget.value)}
        />
        <br />
        <button onClick={doLogin}>log in</button>
    </div>
}
