// Import React
import React from "react";

// Import Spectacle Core tags
import {
Appear,
BlockQuote,
Cite,
CodePane,
Code,
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

import Logo from "./animated_logo/logo.jsx";

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
    printWastedFixed: require("../assets/print_wasted_fixed.png"),
    devProfile: require("../assets/dev_profile.png"),
    prodProfile: require("../assets/prod_profile.png"),
    animationReactTools: require("../assets/animation_react_tools.png"),
    mj: require("../assets/mj.gif")
};

preloader(images);

const theme = createTheme({
    primary: "#32475D"
});

export default class Presentation extends React.Component {
    render() {
        return (
        <Spectacle theme={theme}>
            <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
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
                        <Image src={images.perfTool} height="350px"/>
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
                    <Text textSize=".8rem" textColor="tertiary">
                        master.jsx
                    </Text>
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
                    <Text textSize=".8rem" textColor="tertiary">
                        master.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={7}
                    code={require("raw!../assets/step_2.example")}
                    ranges={[
                  { loc: [106, 130] },
                  { loc: [126, 127]}]}/>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        detail.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={8}
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
                    <Text textSize=".8rem" textColor="tertiary">
                        index.js
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={9}
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
                    <Text textSize=".8rem" textColor="tertiary">
                        detail.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={10}
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
                        Step 4 - 5 - 6
                    </Heading>
                    <Heading size={5} textColor="#00D8FF">
                        Form and react-addons-shallow-compare
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        master.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={11}
                    code={require("raw!../assets/step_4.example")}
                    ranges={[
                  { loc: [97, 117] },
                    { loc: [111, 112] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        form.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={12}
                    code={require("raw!../assets/step_4_1.example")}
                    ranges={[
                  { loc: [35, 47] },
                    { loc: [14, 17] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        form.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={13}
                    code={require("raw!../assets/step_5.example")}
                    ranges={[
                     { loc: [2, 3] },
                  { loc: [23, 26] }
                  ]}/>
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
                <Slide transition={["slide"]}>
                    <Heading size={5} textColor="#00D8FF">
                        PropTypes and Production Builds
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        form.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={14}
                    code={require("raw!../assets/step_5.example")}
                    ranges={[
                     { loc: [54, 58] }
                  ]}/>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} caps fit>
                        PropTypes are useful, but expensive
                    </Heading>
                    <Appear><Text textColor="tertiary">Let's use the Chrome CPU Profiler</Text></Appear>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Text textColor="tertiary">Dev Build</Text>
                    <Image src={images.devProfile} margin="0px auto 40px" width="100%"/>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Text textColor="tertiary">Prod Build</Text>
                    <Image src={images.prodProfile} margin="0px auto 40px" width="100%"/>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        webpack.config.js
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={15}
                    code={require("raw!../assets/webpack.example")}
                    ranges={[
                     { loc: [8, 18] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Step 7
                    </Heading>
                    <Heading size={5} textColor="#00D8FF">
                        transform-react-constant-elements
                    </Heading>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Text textColor="tertiary">Dev Build</Text>
                    <Image src={images.devProfile} margin="0px auto 40px" width="100%"/>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        list.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={16}
                    code={require("raw!../assets/step_7.example")}
                    ranges={[
                     { loc: [18, 20] },
                     { loc: [36, 37] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Step 8
                    </Heading>
                    <Heading size={5} textColor="#00D8FF">
                        transform-react-constant-elements
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        form.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={17}
                    code={require("raw!../assets/step_8.example")}
                    ranges={[
                     { loc: [12, 27] },
                     { loc: [64, 65] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        .babelrc
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={18}
                    code={require("raw!../assets/babelrc.example")}
                    ranges={[
                     { loc: [1, 2] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Final Thoughts
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="tertiary">Avoid long running/blocking tasks in the lifecycle
                            methods</ListItem></Appear>
                        <Appear><ListItem textColor="tertiary">JS Performance Best Practices === React Performance Best
                            Practices</ListItem></Appear>
                        <Appear>
                            <ListItem textColor="tertiary">Wrap expensive validations in Prod checks</ListItem>
                        </Appear>
                        <Appear><CodePane source={require("raw!../assets/prod_check.example")}/></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Text caps size={1} textColor="tertiary">
                            Questions/Comments?
                        </Text>
                    </Fill>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Text caps size={1} textColor="tertiary">
                            React Web Animation
                        </Text>
                    </Fill>
                    <Fill>
                        <Logo/>
                    </Fill>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        What is it?
                    </Heading>
                    <List>
                        <Appear><ListItem textColor="tertiary">React component wrappers around the Web Animations
                            API</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
                    <Text textSize=".8rem" textColor="tertiary">
                        logo.jsx
                    </Text>
                    <CodeSlide
                    lang="jsx"
                    slideIndex={19}
                    code={require("raw!../assets/logo.example")}
                    ranges={[
                     { loc: [1, 2] },
                     { loc: [39, 42] },
                     { loc: [3, 8] },
                     { loc: [9, 19] }
                  ]}/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={4} textColor="tertiary">
                        Declaring animation behavior with JSX is awesome.
                    </Heading>
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Text textColor="tertiary">React Chrome Extension</Text>
                    <Image src={images.animationReactTools} margin="0px auto 40px" width="100%"/>
                </Slide>
                <Slide transition={["slide"]}>
                    <Link href="http://react-web-animation.surge.sh" size={1}
                          textColor="#00D8FF">
                        http://react-web-animation.surge.sh/
                    </Link>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Fill>
                        <Text caps size={1} textColor="tertiary">
                            Questions/Comments?
                        </Text>
                    </Fill>
                </Slide>
                <Slide transition={["slide"]}>
                    <Heading size={1} caps textColor="tertiary">
                        Movie Time
                    </Heading>
                    <Fill>
                        <Image src={images.mj} margin="40px auto 40px" height="300px"/>
                    </Fill>
                    <Link href="https://egghead.io/series/getting-started-with-redux" size={1}
                          textColor="#00D8FF">
                        https://egghead.io/series/getting-started-with-redux
                    </Link>
                </Slide>
            </Deck>
        </Spectacle>
        );
    }
}
