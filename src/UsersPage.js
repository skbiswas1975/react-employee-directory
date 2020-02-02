// Getting the userId from match props and display the user from the users array
const UserPage = ({ match, location }) => {
    const { params: { userId } } = match;
  
    return (
      <>
        <p>
          <strong>User ID: </strong>
          {userId}
        </p>
        <p>
          <strong>User Name: </strong>
          {users[userId - 1].name}
        </p>
      </>
    );
  };