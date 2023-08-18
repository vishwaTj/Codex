import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Heading,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "99.9vw",
        height: "90vh",
      }}
    >
      <Box
        w="80%"
        h="100%"
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box w="80%">
          <Heading>Codex</Heading>
          <Image
            src="https://cdn.dribbble.com/users/603800/screenshots/4569474/dribbble-code.gif"
            borderRadius={"10px"}
          />
        </Box>
      </Box>
      <div
        style={{ height: "100%", width: "2px", backgroundColor: "black" }}
      ></div>
      <Box
        w="80%"
        h="100%"
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box border={"1px solid black"} borderRadius={"06px"} w={"60%"}>
          <Tabs defaultIndex={1}>
            <TabPanels>
              <TabPanel>
                <FormControl>
                  <Stack>
                    <FormLabel mb={"-2px"}>Email address</FormLabel>
                    <Input type="email" />
                    <FormHelperText mt={"1px"}>
                      We'll never share your email.
                    </FormHelperText>
                    <FormLabel mb={"-2px"}>password</FormLabel>
                    <Input type="password" />
                  </Stack>
                </FormControl>
              </TabPanel>
              <TabPanel>
                <FormControl>
                  <Stack>
                    <FormLabel mb={"-2px"}>Name</FormLabel>
                    <Input type="text" />
                    <FormLabel mb={"-2px"}>Email address</FormLabel>
                    <Input type="email" />
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                    <FormLabel mb={"-2px"}>password</FormLabel>
                    <Input type="password" />
                    <FormLabel mb={"-2px"}>avatar</FormLabel>
                    <Input type="text" />
                  </Stack>
                </FormControl>
              </TabPanel>
            </TabPanels>
            <TabList>
              <Tab w="100%">SignIn</Tab>
              <Tab w="100%">SIgnUp</Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
