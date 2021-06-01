import React, { useRef } from 'react';
import { Fonts } from '@/components/Fonts';
import {
  Collapse,
  Flex,
  Heading,
  Text,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  Center,
  Wrap,
  WrapItem,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import * as emailjs from 'emailjs-com';

import { Squash as Hamburger } from 'hamburger-react';
import NewUnformInput from '@/components/Fonts/Inputs/NewUnformInput';
import NewUnformInputMask from '@/components/Fonts/Inputs/NewUnformInputMask';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface FormData {
  telefone: string;
  name: string;
  email: string;
}

export default function Home() {
  // HEADER
  const router = useRouter();
  const menuLinks = [
    {
      text: 'Início',
      href: '/',
    },
    {
      text: 'Diferenciais',
      href: '/#cards',
    },
    {
      text: 'Sobre',
      href: '/#sobre',
    },
    {
      text: 'Contato',
      href: '/#contato',
    },
  ];
  const { isOpen, onToggle } = useDisclosure();

  // END HEADER
  // SOBRE
  // END SOBRE

  // CARDS
  const cardsItems = ['SEGURANÇA', 'ÓTIMA LOCALIZAÇÃO'];
  // END CARDS

  // CONTATO
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    const dataFormated = {
      ...data,
      telefone_formated: data.telefone,
      telefone: data.telefone.replace(/\D/g, ''),
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        dataFormated,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      )
      .then(
        () => {
          // nameRef.current.value = null
          // emailRef.current.value = null
          // messageRef.current.value = null
        },
        () => {
          // console.log(error.text)
        },
      );
  };

  // END CONTATO

  return (
    <>
      <Head>
        <title>Vale Imóveis | Realizando o sonho da sua família!</title>
      </Head>
      <Fonts />
      <Flex flexDir="column">
        <section id="header">
          <Flex
            flexGrow={1}
            boxShadow="base"
            align="center"
            justify="center"
            bgColor="brand.100"
          >
            <Flex maxW="1280px" flexGrow={1} flexDir="column">
              <Flex justify="space-between" align="center" flexGrow={1} p={6}>
                <Image
                  src="/logo.png"
                  width="80px"
                  height="95px"
                  objectFit="contain"
                />
                <Flex flexDir="column" align="flex-end">
                  <Stack
                    d={['none', 'none', 'flex', 'flex']}
                    spacing={4}
                    isInline
                    align="center"
                    justify="center"
                  >
                    {menuLinks.map((link) => (
                      <NextLink key={link.href} passHref href={link.href}>
                        <Link
                          fontWeight={
                            router.asPath === link.href ? 'bold' : 'normal'
                          }
                          _hover={{ fontWeight: 'semibold' }}
                          _focus={{}}
                          color="brand.200"
                        >
                          {link.text}
                        </Link>
                      </NextLink>
                    ))}
                  </Stack>
                  {/* <LinkBox mt={2}>
                    <NextLink passHref href="https://wa.me/553195695242">
                      <LinkOverlay isExternal>
                        <Flex
                          align="center"
                          textAlign="right"
                          color="brand.200"
                        >
                          <Icon
                            as={FaWhatsappSquare}
                            h={[10, 10, 6, 6]}
                            w={[10, 10, 6, 6]}
                          />{' '}
                          <Text d={['none', 'none', 'flex', 'flex']}>
                            (31) 9 9569-5242
                          </Text>
                        </Flex>
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox> */}
                </Flex>
                <IconButton
                  d={['flex', 'flex', 'none', 'none']}
                  aria-label="mobileMenu"
                  bgColor="transparent"
                  color="brand.200"
                  p={0}
                  _hover={{}}
                  _active={{}}
                  onClick={onToggle}
                  icon={<Hamburger label="mobileMenu" size={25} />}
                />
              </Flex>
              <Collapse in={isOpen} animateOpacity>
                <Flex flexDir="column" p={4} boxShadow="inner">
                  <Stack spacing={4} align="center" justify="center">
                    {menuLinks.map((link) => (
                      <NextLink key={link.href} passHref href={link.href}>
                        <Link
                          fontWeight={
                            router.asPath === link.href ? 'bold' : 'normal'
                          }
                          _hover={{ fontWeight: 'semibold' }}
                          _focus={{}}
                          color="brand.200"
                        >
                          {link.text}
                        </Link>
                      </NextLink>
                    ))}
                  </Stack>
                </Flex>
              </Collapse>
            </Flex>
          </Flex>
        </section>
        <section id="callToAction">
          <Flex flexGrow={1} align="center" justify="center">
            <Flex maxW="1280px" flexGrow={1} flexDir="column">
              <Flex flexGrow={1} flexWrap="wrap-reverse" pt={4}>
                <Flex
                  w={['100%', '100%', '50%', '50%']}
                  flexDir="column"
                  justify="center"
                >
                  <Heading
                    size="3xl"
                    as="h1"
                    fontWeight="black"
                    p={4}
                    textAlign="center"
                    bgClip="text"
                    bgGradient="linear(to-br, brand.400, brand.200)"
                  >
                    <Text>
                      <Text as="span">CONFORTO</Text>,
                    </Text>
                    <Text
                      bgGradient="linear(to-bl, brand.200, brand.300)"
                      bgClip="text"
                    >
                      <Text>COMO EM SEUS</Text>
                      <Text>
                        <Text as="span">SONHOS</Text>!
                      </Text>
                    </Text>
                  </Heading>
                </Flex>
                <Flex w={['100%', '100%', '50%', '50%']}>
                  <Image
                    src="/image0.jpg"
                    width="1024px"
                    height="689px"
                    objectFit="contain"
                  />
                </Flex>
              </Flex>

              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Flex
                  w={['100%', 'initial']}
                  align="center"
                  justify="center"
                  borderRadius={['0', '45px']}
                  boxShadow="lg"
                  borderWidth={1}
                  p={4}
                  m={4}
                  flexDir={['column', 'row']}
                >
                  <NewUnformInput isRequired name="name" placeholder="Nome" />
                  <NewUnformInput
                    isRequired
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <NewUnformInputMask
                    isRequired
                    name="telefone"
                    type="tel"
                    mask="(99) 99999-9999"
                    placeholder="Celular"
                  />
                  <Button
                    type="submit"
                    minW="140px"
                    bgColor="brand.200"
                    alignSelf="center"
                    color="brand.100"
                    m={2}
                    borderRadius="full"
                    _hover={{ color: 'brand.200', bgColor: 'brand.400' }}
                  >
                    Contato
                  </Button>
                </Flex>
              </Form>
            </Flex>
          </Flex>
        </section>

        <section id="cards">
          <Flex
            flexGrow={1}
            bgColor="brand.500"
            align="center"
            justify="center"
          >
            <Flex maxW="1280px" justify="center" flexGrow={1} p={4}>
              <Wrap
                justify="space-between"
                maxW="680px"
                flexGrow={1}
                spacing={[2, 4]}
              >
                {cardsItems.map((item) => (
                  <WrapItem key={item}>
                    <Center
                      boxShadow="base"
                      bgColor="brand.100"
                      borderTopLeftRadius="3xl"
                      borderBottomRightRadius="3xl"
                      color="brand.400"
                      transition="width 0.5s, height 0.5s"
                      h={['90px', '120px']}
                      w={['185px', '280px']}
                      textAlign="center"
                    >
                      <Text fontWeight="black">{item}</Text>
                    </Center>
                  </WrapItem>
                ))}
              </Wrap>
            </Flex>
          </Flex>
        </section>
        <section id="sobre">
          <Flex flexGrow={1} align="center" justify="center">
            <Flex maxW="1280px" flexGrow={1} p={4} flexDir="column">
              <Flex flexGrow={1} flexWrap="wrap">
                <Flex w="100%" justify="center">
                  <Carousel
                    autoPlay
                    emulateTouch
                    infiniteLoop
                    renderIndicator={() => false}
                    showThumbs={false}
                  >
                    <Image
                      src="/image1.jpg"
                      width="683px"
                      height="593px"
                      objectFit="contain"
                    />
                    <Image
                      src="/image2.jpg"
                      width="683px"
                      height="593px"
                      objectFit="contain"
                    />
                    <Image
                      src="/image3.jpg"
                      width="683px"
                      height="593px"
                      objectFit="contain"
                    />
                    <Image
                      src="/image4.jpg"
                      width="683px"
                      height="593px"
                      objectFit="contain"
                    />
                    <Image
                      src="/image5.jpg"
                      width="683px"
                      height="593px"
                      objectFit="contain"
                    />
                    <Image
                      src="/image6.jpg"
                      width="683px"
                      height="593px"
                      objectFit="contain"
                    />
                  </Carousel>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </section>
      </Flex>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Flex
          w={['100%', 'initial']}
          align="center"
          justify="center"
          borderRadius={['0', '45px']}
          boxShadow="lg"
          borderWidth={1}
          p={4}
          m={4}
          flexDir={['column', 'row']}
        >
          <NewUnformInput isRequired name="name" placeholder="Nome" />
          <NewUnformInput
            isRequired
            name="email"
            type="email"
            placeholder="Email"
          />
          <NewUnformInputMask
            isRequired
            name="telefone"
            type="tel"
            mask="(99) 99999-9999"
            placeholder="Celular"
          />
          <Button
            type="submit"
            minW="140px"
            bgColor="brand.200"
            alignSelf="center"
            color="brand.100"
            m={2}
            borderRadius="full"
            _hover={{ color: 'brand.200', bgColor: 'brand.400' }}
          >
            Contato
          </Button>
        </Flex>
      </Form>
    </>
  );
}
