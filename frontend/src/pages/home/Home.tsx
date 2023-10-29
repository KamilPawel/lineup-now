import React from 'react';
import { useQuery } from 'react-query';
import { ApiResponse } from '../../api/user';
import { fetchUserById } from '../../api/user';
import { CircularProgress } from '@mui/material';

import { UserCard } from '../../components/UserCard';
import { Stack } from '@mui/system';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';

const Home = () => {
  const [userId, setUserId] = React.useState(1);
  const { data: userData, isLoading, isError } = useQuery<ApiResponse, Error>(['getUser', userId], () => fetchUserById(userId),
  );

  let cardComponent;

  if (isLoading || !userData) {
    cardComponent = <CircularProgress />;
  }

  else if (isError) {
    cardComponent = <div>Error: Something went wrong!</div>; // Customize your error message display
  }

  else {
    cardComponent = <UserCard
      userData={userData}
      disableNext={userId === 12 || userData.data.id === -1}
      disablePrevious={userId === 1 || userData.data.id === -1}
      onNext={() => setUserId(userId + 1)}
      onPrevious={() => setUserId(userId - 1)}
    />;
  }

  return (
    <Page>
      {cardComponent}
    </Page>
  );
};


export default Home;