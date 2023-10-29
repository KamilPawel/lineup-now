import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Stack } from '@mui/material';
import { ApiResponse } from '../api/user';

interface UserCardProps {
    userData: ApiResponse; // Consider replacing 'any' with the actual user type
    onNext: () => void;
    onPrevious: () => void;
    disableNext: boolean;
    disablePrevious: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({ userData, onNext, onPrevious, disableNext, disablePrevious }) => {
    return (
        <Card sx={{ maxWidth: "40vh" }}>
            <CardMedia
                component="img"
                image={userData.data.avatar}
                alt={userData.data.first_name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {userData.data.id} : {userData.data.first_name} {userData.data.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>{userData.data.email}</p>
                    <p>{userData.support.text}</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Stack direction="row" justifyContent='space-between' width="100%">
                    <Button disabled={disablePrevious} size="small" color="primary" onClick={onPrevious} id="user-prev">
                        Previous
                    </Button>
                    <Button disabled={disableNext} size="small" color="primary" onClick={onNext} id="user-next">
                        Next
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    );
};
