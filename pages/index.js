import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Man from '../public/man.svg'
import { Box, Heading, VStack, Center, SimpleGrid, Text, Spacer } from '@chakra-ui/layout'
export default function Home() {
  return (
    <>
      <VStack w="100%" bg="white" h="100%" spacing={0}>
        <VStack>
          <Center className="spacer layer" minH="100vh" maxH="100vh" w="100%" maxW="100vw" p={8}>
            <Box display="flex" h="100%" w="100%" justifyContent="center" alignItems="center">
              <VStack>
                <Heading color="black">👊 Brogramming 👊 </Heading>
                <Heading color="#F5730A ">A mindset.</Heading>
                <Heading color="black" textAlign="center">Welcome to the brotherhood.</Heading>
              </VStack>
            </Box>
          </Center>
          <Center className="spacer layer-b" h="100%" minH="100vh" w="100%" maxW="100vw" alignItems="center" p={16}>
            <Box display="flex" h="100%" w="100%" justifyContent="center" alignItems="center">
              <VStack alignItems="left">

                <Heading color="white" textAlign="left">What is a brogrammer?</Heading>
                <Heading color="white" size="lg" textAlign="left">
                  There is often a misconception that brogrammers are confined by gender.
                  This is grossly incorrect and is slander spread by hate group compsisters.co.uk. Their website is clapped, and so is their mentality.
                  Brogrammers are welcome from all walks of life, and will never be discriminated against, as long as they adhere to the brocode.</Heading>
                <Heading color="white" textAlign="right">How do I join?</Heading>
                <Heading color="white" textAlign="right" size="lg">There is no signup; no organization. To be a bro is a mindset that one must have.
                </Heading>
                <Heading color="white" textAlign="right" size="lg">Anyone and everyone can be a brogrammer.
                </Heading>


              </VStack>
            </Box>
          </Center>
          <Center display="flex" flexDirection="column" alignContent="center" className="spacer" minH="100vh" h="100%" w="100%" maxW="100vw" alignItems="center" p={8}>
            <Heading size="2xl" mb="1em" color="black" textAlign="center">What is the brocode?</Heading>
            <Heading mb="1em" size="xl" color="#F5730A " textAlign="center">The brogramming brocode presents just a few core rules: </Heading>

            <Heading color="black" textAlign="center" size="lg">A bro should not touch grass.</Heading>
            <Heading color="black" textAlign="center" size="lg">A bro should never put down another bro.</Heading>
            <Heading color="black" textAlign="center" size="lg">All bros must look after other bros.</Heading>
            <Heading mb="1em" color="black" textAlign="center" size="lg">A brogrammer specifically, should never use a 🤢 HTML 🤮 template.</Heading>
            <Heading mb="1em" size="xl" color="#F5730A " textAlign="center">Other rules are engrained into your brain once you chose the grindset.</Heading>
          </Center>
          <Center className="spacer layer-g" minH="100vh" h="100%" w="100%" maxW="100vw" alignItems="center" p={16}>
            <Box display="flex" h="100%" w="100%" justifyContent="center" alignItems="center">
              <VStack alignItems="center" w="100%">
                <Heading color="white" mb="1em">Upcoming events and brojects: </Heading>
                <SimpleGrid columns={[1, 1, 1, 2, 2, 3]} spacing="16px">
                  <Box rounded="2xl" h="auto" w="300px" bg="white" p={8}>
                    <VStack textAlign="left" alignItems="start">
                      <Heading color="#F5730A">BroCoin</Heading>
                      <Text color="black">The next big, non-scam crypto with absolutely zero utility. TO THE MOON! 🚀 </Text>
                    </VStack>
                  </Box>
                  <Box rounded="2xl" h="auto" w="300px" bg="white" p={8}>
                    <VStack textAlign="left" alignItems="start">
                      <Heading color="#F5730A">BroCommerce</Heading>
                      <Text color="black">Fully fledged online store with the latest and greates in bro merchandise.</Text>
                    </VStack>
                  </Box>
                  <Box rounded="2xl" h="auto" w="300px" bg="white" p={8}>
                    <VStack textAlign="left" alignItems="start">
                      <Heading color="#F5730A">Non Fungible Bros</Heading>
                      <Text color="black">NFTs? Get out of here. The next big wave is bro based digital assets, and you will find them first right here.</Text>
                    </VStack>
                  </Box>
                  <Box rounded="2xl" h="auto" w="300px" bg="white" p={8}>
                    <VStack textAlign="left" alignItems="start">
                      <Heading color="#F5730A">BroCon 2021</Heading>
                      <Text color="black">BroCon 2021 will be held telepathically. You will know when it starts.</Text>
                    </VStack>
                  </Box>
                  <Box rounded="2xl" h="auto" w="300px" bg="white" p={8}>
                    <VStack textAlign="left" alignItems="start">
                      <Heading color="#F5730A">BrosApp</Heading>
                      <Text color="black">In light of recent events and for legal protection, Brogrammers will use encrypted communications where telepathy is not available.</Text>
                    </VStack>
                  </Box>
                </SimpleGrid>
              </VStack>
            </Box>
          </Center>
          <Box display="flex" flexDirection="column" alignContent="center" className="spacer" minH="40vh" h="100%" w="100%" maxW="100vw" alignItems="center" p={16}>
            <VStack alignItems="center">
              <Heading mb="1em" color="#F5730A">Contacting a bro: </Heading>
              <Heading textAlign="center" size="lg" mb="1em" color="black">If you would like to contact a bro, simply think a thought.</Heading>
            </VStack>
            <Spacer>
            </Spacer>

            <Heading textAlign="center" color="black">Brogramming.Copyright 2021.</Heading>

          </Box>
        </VStack>
      </VStack >

    </>
  )
}
