import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sevda!";
const bio1 = "A Software engineer";
const bio2 = "specialised in building UX/UI experiences";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="2xl" name="Sevda Shukrieva" src="../images/sevdas.jpg" />
    <VStack spacing={8}>
      <Heading as="h1" size="sm">
        {greeting}
      </Heading>

      <Heading as="h2" size="lg">
        {bio1}
      </Heading>
    </VStack>
    <Heading as="h3" size="lg">
      {bio2}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
