import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Superiority() {
  const dataSuperiority = [
    {
      title: "Banyak Plihan Warna",
      content:
        "Tersedia banyak pilihan warna yang menarik dan cocok digunakan untuk berbagai usia.",
    },
    {
      title: "Berbagai Ukuran",
      content:
        "Tersedia berbagai ukuran, mulai dari ukuran kecil hingga besar.",
    },
    {
      title: "Kuat dan Tahan Lama",
      content:
        "Terbuat dari bahan berkualitas tinggi yang menggunakan bahan polikarbonat.",
    },
    {
      title: "Garansi 1 Tahun",
      content:
        "Jika produk yang anda beli mengalami kendala, akan kami ganti dengan unit baru.",
    },
  ];
  return (
    <section>
      <Flex
        flexWrap={"wrap"}
        justifyContent={{ base: "center", md: "space-around" }}
        gap={{ base: 8 }}
        my={8}
      >
        {dataSuperiority.map((data) => {
          return (
            <Flex
              alignItems={{ base: "flex-start", md: "center" }}
              key={data}
              flexDirection={{ md: "column" }}
              gap={{ md: 6 }}
            >
              <Box marginRight={{ base: 8 }}>
                <HamburgerIcon fontSize={{ base: 40, md: 23 }} />
              </Box>
              <Box>
                <Heading size={{ base: "md", md: "sm" }}>{data.title}</Heading>
                <Text
                  fontSize={{ base: "sm" }}
                  width={{ base: 60, md: 48 }}
                  textAlign={"justify"}
                  marginTop={2}
                >
                  {data.content}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </section>
  );
}
