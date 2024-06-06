import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import usePrevious from "../hooks/usePrevious";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sshukrieva@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/sevdas",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sshukrieva/",
  },
];

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  let prevScrollY = usePrevious(scrollY);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // if current scroll is higher than prev scroll, user is scrolling down - nav hidden

    setScrollY(currentScrollY);
    const shouldBeVisible = currentScrollY < prevScrollY;
    setIsNavbarVisible(shouldBeVisible);

    /*  Before the function ends, it updates prevScrollPos to currentScrollPos, so that in the next call of handleScroll,
        prevScrollPos will hold the previous scroll position. */
    prevScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="999"
      transform={isNavbarVisible ? "translateY(0)" : "translateY(-200%)"}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav style={{ display: "flex", gap: "2rem" }}>
            {socials.map(({ url, icon }) => (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={`${url}-${icon}`}
              >
                <FontAwesomeIcon icon={icon} size="2x" key={`${url}-${icon}`} />
              </Link>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link href="/#projects" onClick={handleClick("projects")}>
                Projects
              </Link>
              <Link href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
