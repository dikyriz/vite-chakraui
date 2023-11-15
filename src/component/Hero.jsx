import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
export default function Hero() {
  return (
    <section>
      <Box>
        <Image
          objectFit={"cover"}
          height={{ base: 220, lg: 300 }}
          borderRadius={{ md: 10 }}
          width={"100%"}
          src="https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
      </Box>
    </section>
  );
}
