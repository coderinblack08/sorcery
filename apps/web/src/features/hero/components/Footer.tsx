import {
  Box,
  Heading,
  Icon,
  IconButton,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box as="footer" py={6} borderTop="2px solid" borderColor="borderNormal">
      <SimpleGrid columns={3} color="textFaint">
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Sorcery
          </Heading>
          <List spacing={2}>
            <ListItem>Usage</ListItem>
            <ListItem>Pricing</ListItem>
            <ListItem>Gallery</ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Resources
          </Heading>
          <List spacing={2}>
            <ListItem>Help</ListItem>
            <ListItem>Contribute</ListItem>
            <ListItem>Terms of Condition</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Socials
          </Heading>
          <IconButton
            aria-label="twitter"
            variant="ghost"
            icon={<Icon as={FaTwitter} boxSize={6} />}
          />
          <IconButton
            aria-label="github"
            variant="ghost"
            icon={<Icon as={FaGithub} boxSize={6} />}
          />
          <IconButton
            aria-label="discord"
            variant="ghost"
            icon={<Icon as={FaDiscord} boxSize={6} />}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
