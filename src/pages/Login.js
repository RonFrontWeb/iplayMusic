import querystring from "querystring";
import LoginForm from "../LoginForm";
import RoundButtonIcon from "../RoundButtonIcon";
import "./Login.css"

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "adf9aca1dc9a4e9fa4ed22ebcff99768",
		scope: "user-read-private user-read-email",
		redirect_uri: process.env.REACT_APP_REDIRECT_URI,
		// redirect_uri:window.location.href.includes("iplaymusic")? process.env.REDIRECT_URI :"http://localhost:8888/callback",
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighlzoirhtlzo8ghldhglzdghlzdoigh"
	});
	console.log(queryParameters)

	return (
		<div className="login">
			<h1 className="login__title">Log In</h1>
			<div style={{width:"100%",marginBottom:"50px"}}>
				<LoginForm className="">
					<LoginForm.Field title="Username" type="text" placeholder="Enter your username" icon="contact"/>
					<LoginForm.Field title="Password" type="password" placeholder="Enter your password" icon="key"/>
				</LoginForm>
				<a className="login__button" href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in</a>
				<RoundButtonIcon/>
				<p className="login__underline">One-Touch Login</p>
			</div>
		</div>
	)
}