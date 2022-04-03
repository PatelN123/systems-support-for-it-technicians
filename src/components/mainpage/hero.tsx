import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Systems Support for{' '}
            <Text as={'span'} color={'blue.400'}>
              IT Technicians</Text> (Notes)
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          All notes for <Text as={'span'} color={'blue.400'}>Systems Support for IT Technicians, </Text> 
          it includes a wide range of topics like; hardware, software, networking, customer support and many more. 
          Click the blue button below to see!
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={8}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}>
              Notes
            </Button>
            <Button
              rounded={'full'}
              px={8}
              colorScheme={'gray'}
              bg={'gray.300'}
              _hover={{ bg: 'gray.400' }}>
              Github
            </Button>
          </Stack>
          <img src="computer.png" height="950px" width="950px"></img>
          <Flex w={'full'}>
          </Flex>
        </Stack>
      </Container>
    );
  };