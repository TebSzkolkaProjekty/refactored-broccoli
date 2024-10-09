import { useParams } from 'react-router-dom';

function ProfilePage() {
	const { userId } = useParams();

	return <h1>{userId}</h1>;
}

export default ProfilePage;
