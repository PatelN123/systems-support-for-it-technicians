import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
  import { ReactNode } from 'react';
import { text } from 'stream/consumers';
import { EOF } from 'dns';
  
  const Logo = (props: any) => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 375 375" height="30" version="1.0"><defs>
  <clipPath id="a"><path d="M 147 64 L 228 64 L 228 312.5625 L 147 312.5625 Z M 147 64"/>
  </clipPath></defs><g clip-path="url(#a)"><path fill="#0057FF" d="M 218.394531 64.574219 C 211.761719 62.863281 205.015625 66.945312 203.367188 73.613281 L 147.578125 297.113281 C 145.90625 303.757812 149.945312 310.5 156.605469 312.164062 C 157.609375 312.410156 158.625 312.535156 159.617188 312.535156 C 165.171875 312.535156 170.21875 308.773438 171.632812 303.121094 L 227.421875 79.621094 C 229.082031 72.980469 225.039062 66.238281 218.394531 64.574219 Z M 218.394531 64.574219"/></g>
  <path fill="#0057FF" d="M 134.273438 105.089844 C 129.425781 100.234375 121.589844 100.234375 116.746094 105.089844 L 42.355469 179.589844 C 37.507812 184.445312 37.507812 192.292969 42.355469 197.148438 L 116.746094 271.648438 C 119.160156 274.066406 122.335938 275.285156 125.511719 275.285156 C 128.683594 275.285156 131.859375 274.066406 134.273438 271.648438 C 139.121094 266.792969 139.121094 258.945312 134.273438 254.089844 L 68.652344 188.367188 L 134.273438 122.648438 C 139.121094 117.792969 139.121094 109.945312 134.273438 105.089844 Z M 134.273438 105.089844"/>
  <path fill="#0057FF" d="M 332.644531 179.589844 L 258.253906 105.089844 C 253.410156 100.234375 245.570312 100.234375 240.726562 105.089844 C 235.875 109.945312 235.875 117.792969 240.726562 122.648438 L 306.347656 188.367188 L 240.726562 254.089844 C 235.875 258.945312 235.875 266.792969 240.726562 271.648438 C 243.140625 274.066406 246.316406 275.285156 249.488281 275.285156 C 252.664062 275.285156 255.835938 274.066406 258.253906 271.648438 L 332.644531 197.148438 C 337.492188 192.292969 337.492188 184.445312 332.644531 179.589844 Z M 332.644531 179.589844"/></svg>
   );
  };

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>?? 2022 Systems Support for <Text as={'span'} color={'blue.400'}>
              IT Technicians.</Text> All rights reserved</Text>
          <Stack direction={'row'} spacing={3}>
            <SocialButton label={'Linkedin'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Github'} href={'#'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }