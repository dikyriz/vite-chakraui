import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import { Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Card, Stack } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Reward() {
  const dataReward = [
    {
      title: "Top Brand",
      badge: "2016 - 2020",
    },
    {
      title: "Popular Brand Award",
      badge: "2016 - 2020",
    },
    {
      title: "Top Innovation",
      badge: "2016 - 2020",
    },
  ];
  return (
    <section>
      <Box position={"relative"} height={{ base: 440, md: 330 }}>
        <Box position={"absolute"} width={"100%"} zIndex={-1}>
          <Image
            width={"100%"}
            objectFit={"cover"}
            height={{ base: 440, md: 330 }}
            filter={"auto"}
            contrast={"50%"}
            brightness={"50%"}
            borderRadius={{ md: 10 }}
            src="https://images.unsplash.com/photo-1618573177933-f85f33431149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          />
        </Box>
        <Box py={4} px={{ sm: 2 }}>
          <Heading size={{ base: "lg" }} textAlign={"center"} color={"white"}>
            Penghargaan
          </Heading>
          <Box marginTop={{ base: 4, md: 14 }}>
            <Flex flexWrap={{ base: "wrap", md: "nowrap" }} gap={4}>
              {dataReward.map((data) => {
                return (
                  <Card
                    direction={{ base: "row" }}
                    p={6}
                    alignItems={"center"}
                    gap={3}
                    justifyContent={"space-around"}
                    mx={"auto"}
                    width={290}
                    key={data}
                  >
                    <Box w={20}>
                      <HamburgerIcon fontSize={34} />
                    </Box>
                    <Box w={40} textAlign={"right"}>
                      <Stack>
                        <Heading size={{ base: "md" }}>{data.title}</Heading>
                        <Badge
                          colorScheme="purple"
                          textAlign={"center"}
                          borderRadius={4}
                          py={0.3}
                          px={1}
                          marginLeft={"auto"}
                          display={"inline-block"}
                          width={"fit-content"}
                        >
                          {data.badge}
                        </Badge>
                      </Stack>
                    </Box>
                  </Card>
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
