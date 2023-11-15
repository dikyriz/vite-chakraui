import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function Market() {
  const dataMarket = [
    { url: "../../public/images/image 9.png" },
    { url: "../../public/images/image 10.png" },
    { url: "../../public/images/image 11.png" },
    { url: "../../public/images/image 12.png" },
    { url: "../../public/images/image 13.png" },
  ];
  return (
    <section>
      <Heading size={{ base: "lg" }} textAlign={"center"} my={2}>
        Tersedia Di
      </Heading>
      <Box my={{ base: 10 }}>
        <Flex
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={4}
          justifyContent={{ base: "center", md: "space-around" }}
        >
          {dataMarket.map((data) => {
            return (
              <Link key={data}>
                <Image src={data.url} width={32} />
              </Link>
            );
          })}
        </Flex>
      </Box>
    </section>
  );
}
