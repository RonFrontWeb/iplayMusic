import querystring from "querystring";
import RoundButtonIcon from "../RoundButtonIcon";

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "adf9aca1dc9a4e9fa4ed22ebcff99768",
		scope: "user-read-private user-read-email",
		redirect_uri: "https://iplaymusic-ronfront.netlify.app/callback",
		// redirect_uri: "http://localhost:8888/callback",
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighlzoirhtlzo8ghldhglzdghlzdoigh"
	});


	return (
		<>
			
			<h1>Login</h1>
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with Spotify</a>
			<RoundButtonIcon/>
		</>
	)
}