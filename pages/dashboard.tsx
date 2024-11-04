import { Button, Text, Container } from "@mantine/core";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function dashboardPage() {

  const router = useRouter();

  const handleExternalLink = () => {
    window.open('https://open.spotify.com/',"_blank");
  }

  const switchPageHome = () => {
    router.push('/');
  };

  const switchPageSpotify = () => {
    router.push('/spotifyProfile');
  };

    return (
        <Container>

            <Text
            size="xl"
            fw={700}
            variant="gradient"
            gradient={{ from: 'yellow', to: 'gray', deg: 90 }}
            >
                Music App
            </Text>

            <Button 
            color="#9775fa"
            size="xl"
            onClick={switchPageHome}
            variant="light"
            >
                Home
            </Button>

            <Button 
            color="#9775fa"
            size="xl"
            onClick={switchPageSpotify}
            variant="light"
            >
                Spotify Profile
            </Button>

            <Button 
            color="#9775fa"
            size="xl"
            onClick={handleExternalLink}
            variant="light"
            >
                Spotify!
            </Button>

        </Container>
    )
}