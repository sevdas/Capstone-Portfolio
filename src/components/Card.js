import { Heading, Link, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack>
      <Image src={imageSrc} alt={title} />
      <VStack alignItems="flex-start" spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text
          fontSize="sm"
          color="lightGrey"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Text>
        <Link color="gray.400" href="#">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;
