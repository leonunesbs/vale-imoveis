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
  Icon,
  Center,
  Wrap,
  WrapItem,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';
import * as emailjs from 'emailjs-com';

import { AiFillCheckCircle } from 'react-icons/ai';
import { MdCheck } from 'react-icons/md';

import { Squash as Hamburger } from 'hamburger-react';
import React, { useRef, useState } from 'react';
import NewUnformInput from '@/components/Fonts/Inputs/NewUnformInput';
import NewUnformInputMask from '@/components/Fonts/Inputs/NewUnformInputMask';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

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
  const sobreItems = [
    'Condomínio fechado',
    'Ruas pavimentadas',
    'Rede de água',
    'Rede elétrica',
    'Cercamento',
    'Portão eletrônico',
  ];
  // END SOBRE

  // CARDS
  const cardsItems = [
    'SEM CONSULTA AO SPC OU SERASA',
    'ATÉ 150x',
    'A PARTIR DE R$799,00',
    'FINANCIAMENTO PRÓPRIO',
  ];
  // END CARDS

  // CONTATO

  interface FormData {
    telefone: string;
    name: string;
    email: string;
  }

  const formRef = useRef<FormHandles>(null);
  const [done, setDone] = useState(false);

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
          setDone(true);
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
      <Fonts />
      <Flex flexDir="column">
        <section id="header">
          <Flex
            flexGrow={1}
            boxShadow="base"
            align="center"
            justify="center"
            bgColor="brand.500"
          >
            <Flex maxW="1280px" flexGrow={1} flexDir="column">
              <Flex justify="space-between" align="center" flexGrow={1} p={4}>
                <Image
                  src="/logo.png"
                  width="192px"
                  height="60px"
                  objectFit="contain"
                />
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
                      >
                        {link.text}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
                <IconButton
                  d={['flex', 'flex', 'none', 'none']}
                  aria-label="mobileMenu"
                  bgColor="transparent"
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
              <Flex flexGrow={1} flexWrap="wrap-reverse">
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
                  >
                    <Text>
                      O{' '}
                      <Text as="span" color="brand.500">
                        SONHO
                      </Text>{' '}
                      DA
                    </Text>
                    <Text>
                      <Text>SUA FAMÍLIA</Text>
                    </Text>
                    <Text>
                      AGORA É{' '}
                      <Text as="span" color="brand.500">
                        REALIDADE
                      </Text>
                      !
                    </Text>
                  </Heading>
                </Flex>
                <Flex w={['100%', '100%', '50%', '50%']}>
                  <Image
                    src="/family.jpeg"
                    width="1024px"
                    height="689px"
                    objectFit="contain"
                  />
                </Flex>
              </Flex>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Flex
                  align="center"
                  justify="center"
                  borderRadius={['0', '45px']}
                  boxShadow="lg"
                  borderWidth={1}
                  p={4}
                  m={4}
                  flexDir={['column', 'column', 'row']}
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
                    isDisabled={done}
                    w="75%"
                    bgColor="brand.500"
                    alignSelf="center"
                    color="brand.700"
                    m={2}
                    borderRadius="full"
                    _hover={{ color: 'brand.200', bgColor: 'brand.400' }}
                  >
                    {done ? <Icon as={MdCheck} h={6} w={6} /> : 'Contato'}
                  </Button>
                </Flex>
              </Form>
            </Flex>
          </Flex>
        </section>

        <section id="cards">
          <Flex flexGrow={1} bgColor="#FFF" align="center" justify="center">
            <Flex maxW="1280px" flexGrow={1} p={4}>
              <Wrap justify="center" flexGrow={1}>
                {cardsItems.map((item) => (
                  <WrapItem key={item}>
                    <Center
                      boxShadow="base"
                      bgColor="brand.700"
                      borderTopLeftRadius="3xl"
                      borderBottomRightRadius="3xl"
                      color="brand.500"
                      h="90px"
                      w="185px"
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
                <Flex w={['100%', '100%', '50%', '50%']} justify="center">
                  <Image
                    src="/sobre.jpeg"
                    width="683px"
                    height="593px"
                    className="sobreImage"
                    objectFit="contain"
                  />
                  <style jsx global>{`
                    .sobreImage {
                      border-top-left-radius: 50px;
                    }
                  `}</style>
                </Flex>
                <Stack
                  w={['100%', '100%', '50%', '50%']}
                  justify="center"
                  flexDir="column"
                  my={6}
                  pl={[4, 14]}
                >
                  {sobreItems.map((item) => (
                    <Text
                      key={item}
                      as="h3"
                      fontSize="lg"
                      fontWeight="semibold"
                      _hover={{ color: 'brand.500' }}
                    >
                      <Icon
                        as={AiFillCheckCircle}
                        color="brand.500"
                        _hover={{ color: 'brand.700' }}
                        w={10}
                        h={10}
                      />{' '}
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </section>
        <section id="contato">
          <Flex flexGrow={1} align="center" bgColor="#FFF" justify="center">
            <Flex maxW="1280px" flexGrow={1} p={4}>
              Contato
            </Flex>
          </Flex>
        </section>
        <section id="footer">
          <Flex flexGrow={1} align="center" justify="center">
            <Flex maxW="1280px" flexGrow={1} p={4}>
              Footer
            </Flex>
          </Flex>
        </section>
      </Flex>
    </>
  );
}
