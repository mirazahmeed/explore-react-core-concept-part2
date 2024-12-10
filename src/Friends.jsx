import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
export default function Friends() {
    const [friends, countFriends] = useState([]);

    // Fetch friend data from an API or local JSON file

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => countFriends(data));
    }, []);

    return (
        <div className="box">
            <h1>Friends</h1>
            {/* Render friend data here */}
            <h3>Friends: {friends.length}</h3>

            {friends.map((friend) => (
                <Friend friend={friend}></Friend>
            ))}
        </div>
    );
}
