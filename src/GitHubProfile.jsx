import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileForm from "./ProfileForm";

const BASE_URL = "https://api.github.com/users";

export default function GitHubProfile() {
  const [userData, setUserData] = useState({ data: null, isLoading: true });
  const [username, setUsername] = useState("sh66n");
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(BASE_URL + "/" + username);
      setUserData({ data, isLoading: false });
    };
    fetchUser();
  }, [username]);

  const search = (username) => {
    setUserData({ data: null, isLoading: true });
    setUsername(username);
  };

  if (userData.isLoading) return <i>Loading...</i>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src={userData.data.avatar_url} alt="" />
      {username}
      <ProfileForm search={search} />
    </div>
  );
}
