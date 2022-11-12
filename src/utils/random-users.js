import axios from "axios"

export default async function getUsers() {
	const { data } = await axios.get("https://randomuser.me/api/")

	return data.results
}
