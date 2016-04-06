// Import React
import React from "react";

// Import Spectacle Core tags
import {
Appear,
BlockQuote,
Cite,
CodePane,
Deck,
Fill,
Heading,
Image,
Layout,
Link,
ListItem,
List,
Markdown,
Quote,
Slide,
Spectacle,
Text
} from "spectacle";

import CodeSlide from './code_slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    cactus: require("../assets/ReactCactus.svg"),
    me: require("../assets/me.png"),
    perfTool: require("../assets/perf_tool.png"),
    printWasted: require("../assets/print_wasted.png"),
    printWastedFixed: require("../assets/print_wasted_fixed.png")

};

preloader(images);

const theme = createTheme({
    primary: "#32475D"
});

export default class Presentation extends React.Component {
    render() {
        return (
        <Spectacle theme={theme}>
            <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Image src={images.cactus} margin="0px auto 40px" height="293px"/>
                    <Heading size={1} caps fit>
                        Tucson ReactJS
                    </Heading>
                </Slide>
                <Slide transition={["zoom", "fade"]} bgColor="primary"
                       notes="<ul><li>talk about that</li><li>and that</li></ul>">
                    <Image src={images.me} margin="0px auto 40px" height="293px"/>
                    <Text caps size={1} textColor="tertiary">Charles King</Text>
                    <Text textColor="tertiary" margin="20px auto 20px"><Link href="http://twitter.com/thebringking"
                                                                             textColor="#00D8FF">@TheBringKing</Link> on
                        Twitter</Text>
                    <Text textSize={"2rem"} margin="20px auto 20px" textColor="tertiary">President @ <Link
                    href="http://rinconstrategies.io" textColor="#00D8FF">Rincon
                        Strategies</Link></Text>

                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Heading caps size={1} textColor="tertiary">
                            Agenda
                        </Heading>
                    </Fill>
                    <Fill>
                        <List>
                            <Appear><ListItem textColor="tertiary">ReactJS Performance</ListItem></Appear>
                            <Appear><ListItem textColor="tertiary">React Web Animation</ListItem></Appear>
                            <Appear><ListItem textColor="tertiary">Redux Videos Pt. 2</ListItem></Appear>
                        </List>
                    </Fill>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Heading caps size={1} textColor="tertiary">
                            Code
                        </Heading>
                    </Fill>
                    <Fill>
                        <Text>
                            <Link href="https://github.com/TucsonReactJS/react-perf-slides" caps size={1}
                                  textColor="#00D8FF">
                                This Deck
                            </Link>
                        </Text>
                        <Text>
                            <Link href="https://github.com/TucsonReactJS/react-perf" caps size={1} textColor="#00D8FF">
                                ReactJS Performance
                            </Link>
                        </Text>
                        <Text>
                            <Link href="https://github.com/RinconStrategies/react-web-animation" caps size={1}
                                  textColor="#00D8FF">
                                React Web Animation
                            </Link>
                        </Text>
                    </Fill>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Text caps size={1} textColor="tertiary">
                            ReactJS Performance: Building a Color Viewer
                        </Text>
                    </Fill>
                    <Fill>
                        <Image src={images.perfTool} height="350px" />
                    </Fill>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="red">
                        Warning!
                    </Heading>
                    <Text caps size={1} textColor="tertiary">
                        These are all optimizations. Build your app first, then do this later.
                    </Text>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Step 1
                    </Heading>
                    <Heading size={5} caps textColor="#00D8FF">
                        Initial Implementation
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <CodeSlide
                    lang="jsx"
                    slideIndex={6}
                    code={require("raw!../assets/step_1.example")}
                    ranges={[
                  { loc: [116, 144] },
                  { loc: [119, 120]},
                  { loc: [120, 121]},
                  { loc: [121, 122]},
                  { loc: [124, 136]},
                  { loc: [136, 141]},
                  { loc: [141, 142]}]}/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Problems
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="tertiary">Re-rendering the entire app</ListItem></Appear>
                        <Appear><ListItem textColor="tertiary">Messy</ListItem></Appear>
                        <Appear><ListItem textColor="tertiary">Not composable and reusable</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Step 2
                    </Heading>
                    <Heading size={5} caps textColor="#00D8FF">
                        Componentization
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <CodeSlide
                    lang="jsx"
                    slideIndex={6}
                    code={require("raw!../assets/step_2.example")}
                    ranges={[
                  { loc: [106, 130] },
                  { loc: [126, 127]}]}/>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <CodeSlide
                    lang="jsx"
                    slideIndex={6}
                    code={require("raw!../assets/step_2_1.example")}
                    ranges={[
                  { loc: [21, 32] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Problems
                    </Heading>
                    <List>
                        <Appear><ListItem
                        textColor="tertiary"><span>Re-rendering the entire app</span></ListItem></Appear>
                        <Appear><ListItem textColor="tertiary"><span
                        style={{textDecoration:'line-through'}}>Messy</span></ListItem></Appear>
                        <Appear><ListItem textColor="tertiary"><span style={{textDecoration:'line-through'}}>Not composable and reusable</span></ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        How do we fix it?
                    </Heading>
                    <Heading size={5} textColor="#00D8FF">
                        React Performance Tools
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <CodeSlide
                    lang="jsx"
                    slideIndex={6}
                    code={require("raw!../assets/step_2_2.example")}
                    ranges={[
                  { loc: [5, 9] }
                  ]}/>
                </Slide>
                <Slide>
                    <Image src={images.printWasted} margin="0px auto 40px" style={{width:"100%",height:"auto"}}/>
                    <Heading size={1} fit>
                        Perf.printWasted()
                    </Heading>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Step 3
                    </Heading>
                    <Heading size={5} textColor="#00D8FF">
                        shouldComponentUpdate
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <CodeSlide
                    lang="jsx"
                    slideIndex={6}
                    code={require("raw!../assets/step_3.example")}
                    ranges={[
                  { loc: [19, 37] },
                    { loc: [21, 24] }
                  ]}/>
                </Slide>
                <Slide>
                    <Image src={images.printWastedFixed} margin="0px auto 40px" style={{width:"100%",height:"auto"}}/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Problems
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="tertiary"><span style={{textDecoration:'line-through'}}>Re-rendering the entire app</span></ListItem></Appear>
                        <Appear><ListItem textColor="tertiary"><span
                        style={{textDecoration:'line-through'}}>Messy</span></ListItem></Appear>
                        <Appear><ListItem textColor="tertiary"><span style={{textDecoration:'line-through'}}>Not composable and reusable</span></ListItem></Appear>
                    </List>
                </Slide>
            </Deck>
        </Spectacle>
        );
    }
}
