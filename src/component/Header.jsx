import { Link } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <header>
      <nav>
        <Flex
          alignItems={"center"}
          justifyContent={{ lg: "space-around", base: "space-between" }}
          py={2}
          px={{ lg: 0, base: 10 }}
        >
          <Box>
            <Link fontSize={26} fontWeight={500}>
              Bottles
            </Link>
          </Box>
          <Box>
            <Box display={{ md: "none", base: "block" }}>
              <HamburgerIcon />
            </Box>
            <Box display={{ md: "block", base: "none" }}>
              <List>
                <Flex gap={8}>
                  <ListItem>
                    <Link>Produk</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Galeri</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Blog</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Tentang Kami</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Hubungi Kami</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Masuk</Link>
                  </ListItem>
                </Flex>
              </List>
            </Box>
          </Box>
        </Flex>
      </nav>
    </header>
  );
}

export default Header;
