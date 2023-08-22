import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Heading,
} from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const UserAuth = () => {
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
              {/* Sign In Tab Pane */}
              <TabPanel>
                <Login />
              </TabPanel>

              {/* Sign Up Tab pane */}
              <TabPanel>
                <SignUp />
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

export default UserAuth;
