import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import React from "react";
import Footer from "./components/Footer";

interface HeroFeatureProps {}

const HeroFeature: React.FC<HeroFeatureProps> = ({}) => {
  return (
    <Container py={16}>
      <Heading as="h1">Sorcery</Heading>
      <Text mt={2} color="textMuted">
        Yet Another{" "}
        <Text
          as="a"
          textUnderlineOffset={4}
          textDecoration="underline"
          textDecorationStyle="wavy"
          textDecorationColor="textFaint"
        >
          Digital Garden
        </Text>
        , But Magical.
      </Text>
      <Button onClick={() => signIn("github")} width="full" my={6}>
        Login with GitHub
      </Button>
      <Footer />
    </Container>
  );
};

export default HeroFeature;
