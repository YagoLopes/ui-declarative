import React from "react";
import { Heading, Grid, Flex, Input } from "@chakra-ui/core";
import logo from "./assets/logo.png";

function App() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr  480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src={logo} alt="Rocketseat" />
        <Heading size="2xl" lineHeight="shorter" marginTop="16">
          Faça seu login na plataforma
        </Heading>
      </Flex>
      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray-700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple-500"
          borderRadius="sm"
          placeholder="E-mail"
        />
      </Flex>
    </Grid>
  );
}

export default App;
