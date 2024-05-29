import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} borderRadius="md" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/blog">Blog</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" size="xl">Welcome to My Blog</Heading>
          <Text fontSize="lg" mt={4}>This is a place where I share my thoughts, experiences, and stories. Stay tuned for more updates!</Text>
          <Button as={RouterLink} to="/add-post" colorScheme="blue" mt={4}>Add New Post</Button>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h4" size="md">{post.title}</Heading>
                <Text fontSize="sm" color="gray.500">{post.date}</Text>
                <Text mt={2}>{post.content.substring(0, 100)}...</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;