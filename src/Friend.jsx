export default function Friend({ friend }) {
    return (
        <div>
            <h3>Friend Name: {friend.name}</h3>
            <p>Friend Email: {friend.email}</p>
        </div>
    );
}
