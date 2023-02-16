
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CardContainer from "./components/CardContainer.style";
import Home from "./components/Home.style";
import Navbar from "./components/Navbar.style";
function App() {
  const [users, setUsers] = useState([]);
  const [showUser, setShowUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUsersData = async () => {
    setShowUser(true)
    setLoading(true);
    setTimeout(async () => {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(data.data);
      setLoading(false);
      setShowUser(true)
    }, 3000);
  };


  return (
    <Container>
      <Navbar getUsersData={getUsersData} />
      {showUser ? <CardContainer users={users} loading={loading} /> : <Home />}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
    background-color: #f3fbfd;
`

export default App;
