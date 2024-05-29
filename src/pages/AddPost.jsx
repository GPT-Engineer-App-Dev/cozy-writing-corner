import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, date, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} borderRadius="md" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
      </Flex>

      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading as="h2" size="xl" mb={4}>Add New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" width="full">Add Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default AddPost;