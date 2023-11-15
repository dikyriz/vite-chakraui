import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <Box bgColor={"#526D82"} borderTopRadius={{ md: 10 }}>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent={{ sm: "space-around" }}
          color={"white"}
          px={{ base: 2 }}
          gap={4}
          paddingTop={{ sm: "4" }}
        >
          <Box>
            <Link fontSize={26} fontWeight={600}>
              Bottles
            </Link>
            <List>
              <ListItem>Jl. Benjengan No. 20</ListItem>
              <ListItem>Sidoarjo</ListItem>
              <ListItem>62257</ListItem>
              <ListItem>08977654321</ListItem>
              <ListItem>
                <Flex>
                  <Link>
                    <HamburgerIcon />
                  </Link>
                  <Link>
                    <HamburgerIcon />
                  </Link>
                  <Link>
                    <HamburgerIcon />
                  </Link>
                </Flex>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Heading size={{ base: "md" }}>Produk</Heading>
            <List paddingTop={3} lineHeight={{ sm: 7 }}>
              <ListItem>
                <Link>Promo</Link>
              </ListItem>
              <ListItem>
                <Link>Baru</Link>
              </ListItem>
              <ListItem>
                <Link>Kategori 1</Link>
              </ListItem>
              <ListItem>
                <Link>Kategori 2</Link>
              </ListItem>
              <ListItem>
                <Link>Kategori 3</Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Heading size={{ base: "md" }}>Perusahaan</Heading>
            <List paddingTop={3} lineHeight={{ sm: 7 }}>
              <ListItem>
                <Link>About</Link>
              </ListItem>
              <ListItem>
                <Link>Contact Us</Link>
              </ListItem>
              <ListItem>
                <Link>Lowongan Kerja</Link>
              </ListItem>
              <ListItem>
                <Link>Gallery</Link>
              </ListItem>
              <ListItem>
                <Link>Blog</Link>
              </ListItem>
              <ListItem>
                <Link>Kebijakan Privasi</Link>
              </ListItem>
              <ListItem>
                <Link>Syarat dan Ketentuan</Link>
              </ListItem>
            </List>
          </Box>
        </Flex>
        <Box
          py={2}
          paddingTop={6}
          width={"20rem"}
          mx={"auto"}
          textAlign={"center"}
        >
          <Text fontSize={12} fontWeight={600}>
            &copy; 2019 -2021 Gradin. All Rights Reserved. Please send bug
            report and feedback to: Gradin
          </Text>
        </Box>
      </Box>
    </footer>
  );
}
